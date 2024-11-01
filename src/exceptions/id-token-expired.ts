import { BadRequestException } from '@nestjs/common';

export class IdTokenExpiredException extends BadRequestException {
  constructor(error?: string) {
    super('error.id-token-expired', error);
  }
}
