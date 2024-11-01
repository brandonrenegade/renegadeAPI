import { BadRequestException } from '@nestjs/common';

export class AddedByYouException extends BadRequestException {
  constructor(error?: string) {
    super('error.added-by-you', error);
  }
}
