import { Injectable } from '@nestjs/common';
import * as firebase from 'firebase-admin';
import { BatchResponse } from 'firebase-admin/lib/messaging/messaging-api';
import { chunk } from 'lodash';

// import FirebaseConfig from '@config/firebase.config';
import { mapLimit } from 'async';
import * as shell from 'shelljs';

export interface ISendFirebaseMessages {
  token: string;
  title?: string;
  message: string;
  data?: any;
}

export interface IUserSendFirebaseMessages extends ISendFirebaseMessages {
  uid: string;
  isPushed?: boolean;
}

@Injectable()
export class NotificationsService {
  async sendFirebaseMessages(
    firebaseMessages: ISendFirebaseMessages[],
    dryRun?: boolean,
  ): Promise<BatchResponse> {
    const batchedFirebaseMessages = chunk(firebaseMessages, 500);

    const batchResponses = await mapLimit<
      ISendFirebaseMessages[],
      BatchResponse
    >(
      batchedFirebaseMessages,
      process.env.FIREBASE_NOTIFICATION_PARALLEL_LIMIT || 3, // 3 is a good place to start
      async (
        groupedFirebaseMessages: ISendFirebaseMessages[],
      ): Promise<BatchResponse> => {
        try {
          const tokenMessages: firebase.messaging.TokenMessage[] =
            groupedFirebaseMessages.map(({ message, title, token, data }) => ({
              notification: { body: message, title },
              token,
              ...(data ? { data } : null),
              apns: {
                payload: {
                  aps: {
                    contentAvailable: true,
                  },
                },
                headers: {
                  'apns-priority': '5',
                },
              },
            }));
          return await this.sendAll(tokenMessages, dryRun);
        } catch (error) {
          console.log('error:', error);
          return {
            responses: groupedFirebaseMessages.map(() => ({
              success: false,
              error,
            })),
            successCount: 0,
            failureCount: groupedFirebaseMessages.length,
          };
        }
      },
    );

    return batchResponses.reduce(
      ({ responses, successCount, failureCount }, currentResponse) => {
        return {
          responses: responses.concat(currentResponse.responses),
          successCount: successCount + currentResponse.successCount,
          failureCount: failureCount + currentResponse.failureCount,
        };
      },
      {
        responses: [],
        successCount: 0,
        failureCount: 0,
      } as unknown as BatchResponse,
    );
  }

  async sendAll(
    messages: firebase.messaging.TokenMessage[],
    dryRun?: boolean,
  ): Promise<BatchResponse> {
    if (process.env.NODE_ENV === 'local') {
      console.log('local env');
      for (const { notification, token } of messages) {
        shell.exec(
          `echo '{ "aps": { "alert": ${JSON.stringify(
            notification,
          )}, "token": "${token}" } }' | xcrun simctl push booted com.company.appname -`,
        );
      }
    }
    const result = firebase.messaging().sendEach(messages, dryRun);
    return result;
  }
}
