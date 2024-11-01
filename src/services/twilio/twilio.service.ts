import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TwilioService as NestTwilioService } from 'nestjs-twilio';

@Injectable()
export class TwilioService {
  constructor(
    private readonly twilioService: NestTwilioService,
    private readonly configService: ConfigService,
  ) {}

  async sendSMS(targetPhoneNumber: string, message: string) {
    return this.twilioService.client.messages.create({
      body: message,
      from: this.configService.get('TWILIO_PHONE_NUMBER'),
      to: targetPhoneNumber,
    });
  }
}
