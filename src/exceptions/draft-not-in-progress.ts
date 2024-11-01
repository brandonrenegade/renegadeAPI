import { BadRequestException } from '@nestjs/common';

export class DraftNotInProgressException extends BadRequestException {
  constructor(error?: string) {
    super('error.draft-not-in-progress', error);
  }
}
