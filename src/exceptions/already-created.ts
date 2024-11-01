import { BadRequestException } from '@nestjs/common';

export class AlreadyCreatedException extends BadRequestException {
  constructor(error?: string) {
    super('error.already-created', error);
  }
}
