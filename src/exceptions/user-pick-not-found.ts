import { BadRequestException } from '@nestjs/common';

export class UserPickNotFoundException extends BadRequestException {
  constructor(error?: string) {
    super('error.user-pick-not-found', error);
  }
}
