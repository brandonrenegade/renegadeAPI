import { BadRequestException } from '@nestjs/common';

export class DraftAlreadyStartedException extends BadRequestException {
  constructor(error?: string) {
    super('error.draft-already-started', error);
  }
}
