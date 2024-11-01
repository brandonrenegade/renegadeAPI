import { BadRequestException } from '@nestjs/common';

export class SendInvitationException extends BadRequestException {
  constructor(error?: string) {
    super('error.send-invitation', error);
  }
}
