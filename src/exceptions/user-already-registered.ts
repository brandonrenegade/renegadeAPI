import { BadRequestException } from '@nestjs/common';

export class UserAlreadyRegisteredException extends BadRequestException {
  constructor(error?: string) {
    super('error.user-already-registered', error);
  }
}
