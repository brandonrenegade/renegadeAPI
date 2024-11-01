import { Process, Processor } from '@nestjs/bull';

import { Job } from 'bull';

import { WebhookService } from './webhook.service';

@Processor('draft-task')
export class DraftProcessor {
  constructor(private readonly webhookService: WebhookService) {}

  @Process('operate-draft-task')
  async handleDraft(job: Job) {
    try {
      const { type, draftId, playerIndex = 0, teamIndex = 0 } = job.data;
      console.log(type, `draftId: ${draftId}`);
      if (type === 'pick') {
        await this.webhookService.autoPickPlayer(
          draftId,
          playerIndex,
          teamIndex,
        );
      }
    } catch (err) {
      console.log('DraftProcessor error', err);
    }
  }
}
