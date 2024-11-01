import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as PubNub from 'pubnub';

@Injectable()
export class PubnubService {
  constructor(private configService: ConfigService) {}

  getPubnub() {
    return new PubNub({
      userId: 'd575e974-e799-4cea-b119-f0de2ebd23f5', // constant to avoid error
      publishKey: this.configService.get('PUBNUB_PUBLISH_KEY'),
      subscribeKey: this.configService.get('PUBNUB_SUBSCRIBE_KEY'),
    });
  }

  public async sendMessage(channelName: string, message: any) {
    try {
      const publishPayload = {
        channel: `${channelName}`,
        message,
      };

      await this.getPubnub().publish(publishPayload);
    } catch (err) {
      console.log(err);
    }
  }
}
