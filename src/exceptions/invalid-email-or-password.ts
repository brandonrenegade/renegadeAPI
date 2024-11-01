import { BadRequestException } from '@nestjs/common';

export class InvalidEmailOrPasswordException extends BadRequestException {
  constructor(error?: string) {
    super('error.invalid-email-or-password', error);
  }
}
