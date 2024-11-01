import { BadRequestException } from '@nestjs/common';

export class InviteNotFoundException extends BadRequestException {
  constructor(error?: string) {
    super('error.invite-not-found', error);
  }
}
