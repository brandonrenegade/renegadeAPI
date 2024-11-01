import { BadRequestException } from '@nestjs/common';

export class InvalidStartAtParamException extends BadRequestException {
  constructor(error?: string) {
    super('error.invalid-param-start-at', error);
  }
}
