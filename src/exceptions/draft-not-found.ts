import { BadRequestException } from '@nestjs/common';

export class DraftNotFoundException extends BadRequestException {
  constructor(error?: string) {
    super('error.draft-not-found', error);
  }
}
