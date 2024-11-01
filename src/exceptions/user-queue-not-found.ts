import { BadRequestException } from '@nestjs/common';

export class UserQueueNotFoundException extends BadRequestException {
  constructor(error?: string) {
    super('error.user-queue-not-found', error);
  }
}
