import { HttpModule } from '@nestjs/axios';
import { BullModule } from '@nestjs/bull';
import { Module } from '@nestjs/common';

import { AblyService } from '@services/ably/ably.service';

import { DraftProcessor } from './draft.processor';
import { WebhookController } from './webhook.controller';
import { WebhookService } from './webhook.service';

@Module({
  imports: [
    HttpModule,
    BullModule.registerQueue({
      name: 'draft-task',
    }),
  ],
  controllers: [WebhookController],
  providers: [WebhookService, DraftProcessor, AblyService],
  exports: [WebhookService],
})
export class WebhookModule {}
