import { BadRequestException } from '@nestjs/common';

export class NotDraftStatusException extends BadRequestException {
  constructor(error?: string) {
    super('error.not-draft-status', error);
  }
}
