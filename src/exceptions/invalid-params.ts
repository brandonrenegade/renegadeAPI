import { BadRequestException } from '@nestjs/common';

export class InvalidParamsException extends BadRequestException {
  constructor(error?: string) {
    super('error.invalid-params', error);
  }
}
