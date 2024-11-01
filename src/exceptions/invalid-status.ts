import { BadRequestException } from '@nestjs/common';

export class InvalidStatusException extends BadRequestException {
  constructor(error?: string) {
    super('error.invalid-status', error);
  }
}
