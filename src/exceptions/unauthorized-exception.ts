import { BadRequestException } from '@nestjs/common';

export class UnauthorizedException extends BadRequestException {
  constructor(error?: string) {
    super('error.unauthorized-exception', error);
  }
}
