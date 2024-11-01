import { BadRequestException } from '@nestjs/common';

export class AlreadySendCodeException extends BadRequestException {
  constructor(error?: string) {
    super('error.already-send-code', error);
  }
}
