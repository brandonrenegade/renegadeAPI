import { HttpService } from '@nestjs/axios';
import { InjectQueue } from '@nestjs/bull';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

import { ApiSuccessResponse } from '@dtos/api';
import { WebhookNotAuthenticatedException } from '@exceptions/index';
import { AblyService } from '@services/ably/ably.service';
import { Queue } from 'bull';

@Injectable()
export class WebhookService {
  constructor(
    private readonly configService: ConfigService,
    private readonly httpService: HttpService,
    private readonly ablyService: AblyService,
    @InjectQueue('draft-task') private draftTaskQueue: Queue,
  ) {}

  validateGenericApiKey(apiKey: string) {
    if (apiKey !== this.configService.get('WEBHOOK_API_KEY')) {
      throw new WebhookNotAuthenticatedException();
    }
  }

  async sendDraftMessage(
    channelName: string,
    message: any,
    draftTask: any,
  ): Promise<ApiSuccessResponse> {
    if (draftTask) {
      try {
        const roundIntervalSecs = Number(
          this.configService.get('ROUND_INTERVAL_SECONDS') || 60,
        );
        this.draftTaskQueue.add(
          'operate-draft-task',
          {
            ...draftTask,
          },
          { delay: roundIntervalSecs * 1000, removeOnComplete: true },
        );
      } catch (err) {
        console.log(`sendDraftMessage draftTask error: `, err);
      }
    }
    if (channelName && message) {
      try {
        await this.ablyService.sendMessage(channelName, message);
      } catch (err) {
        console.log(`sendDraftMessage send ably message error: `, err);
      }
    }
    return new ApiSuccessResponse();
  }

  async autoPickPlayer(
    draftId: string,
    playerIndex: number,
    teamIndex: number,
  ) {
    await this.httpService.axiosRef.post(
      `${this.configService.get(
        'BACKEND_URL',
      )}/webhooks/auto-pick-player/${this.configService.get(
        'WEBHOOK_API_KEY',
      )}`,
      { draftId, playerIndex, teamIndex },
    );
  }
}
