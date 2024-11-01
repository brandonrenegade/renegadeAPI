import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Param,
  Post,
} from '@nestjs/common';
import { ApiExcludeEndpoint, ApiResponse, ApiTags } from '@nestjs/swagger';

import { WebhookService } from './webhook.service';

@Controller('webhooks')
@ApiTags('Webhooks')
export class WebhookController {
  constructor(private readonly webhookService: WebhookService) {}

  @Post('/send-draft-message/:apiKey')
  @HttpCode(HttpStatus.OK)
  @ApiResponse({
    status: HttpStatus.OK,
  })
  @ApiExcludeEndpoint()
  async sendDraftMessage(@Param('apiKey') apiKey: string, @Body() body: any) {
    this.webhookService.validateGenericApiKey(apiKey);
    const { channelName, message, draftTask } = body;
    await this.webhookService.sendDraftMessage(channelName, message, draftTask);
  }
}
