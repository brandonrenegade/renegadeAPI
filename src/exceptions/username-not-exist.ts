import { BadRequestException } from '@nestjs/common';

export class UsernameNotExistException extends BadRequestException {
  constructor(error?: string) {
    super('error.username-does-not-exist', error);
  }
}
