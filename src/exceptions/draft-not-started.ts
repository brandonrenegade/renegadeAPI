import { BadRequestException } from '@nestjs/common';

export class DraftNotStartedException extends BadRequestException {
  constructor(error?: string) {
    super('error.draft-not-started', error);
  }
}
