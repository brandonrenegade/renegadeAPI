import { BadRequestException } from '@nestjs/common';

export class InvalidRoundIndexException extends BadRequestException {
  constructor(error?: string) {
    super('error.invalid-round-index', error);
  }
}
