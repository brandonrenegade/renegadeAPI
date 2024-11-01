import { BadRequestException } from '@nestjs/common';

export class UsernameIsTakenException extends BadRequestException {
  constructor(error?: string) {
    super('error.username-is-taken', error);
  }
}
