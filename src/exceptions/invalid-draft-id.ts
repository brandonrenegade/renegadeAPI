import { BadRequestException } from '@nestjs/common';

export class InvalidDraftIdException extends BadRequestException {
  constructor(error?: string) {
    super('error.invalid-draft-id', error);
  }
}
