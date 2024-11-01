import { BadRequestException } from '@nestjs/common';

export class AlreadyInvitedByYouException extends BadRequestException {
  constructor(error?: string) {
    super('error.already-invited-by-you', error);
  }
}
