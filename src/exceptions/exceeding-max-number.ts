import { BadRequestException } from '@nestjs/common';

export class ExceedingMaxNumberException extends BadRequestException {
  constructor(error?: string) {
    super('error.exceeding-max-number', error);
  }
}
