import { BadRequestException } from '@nestjs/common';

export class EmailIsTakenException extends BadRequestException {
  constructor(error?: string) {
    super('error.email-is-taken', error);
  }
}
