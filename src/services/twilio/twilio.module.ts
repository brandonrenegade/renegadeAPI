import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TwilioModule as NestTwilioModule } from 'nestjs-twilio';

import { TwilioService } from './twilio.service';

@Module({
  imports: [
    NestTwilioModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        accountSid: configService.get('TWILIO_ACCOUNT_SID'),
        authToken: configService.get('TWILIO_AUTH_TOKEN'),
      }),
      inject: [ConfigService],
    }),
  ],
  controllers: [],
  providers: [TwilioService],
  exports: [TwilioService],
})
export class TwilioModule {}
