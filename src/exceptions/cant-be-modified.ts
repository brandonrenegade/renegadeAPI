import { BadRequestException } from '@nestjs/common';

export class CantBeModifiedException extends BadRequestException {
  constructor(error?: string) {
    super('error.the-status-can-not-be-modified', error);
  }
}
