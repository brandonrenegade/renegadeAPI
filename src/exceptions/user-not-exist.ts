import { BadRequestException } from '@nestjs/common';

export class UserNotExistException extends BadRequestException {
  constructor(error?: string) {
    super('error.user-does-not-exist', error);
  }
}
