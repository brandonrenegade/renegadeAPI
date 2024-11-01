import { BadRequestException } from '@nestjs/common';

export class TeamAlreadyExistsException extends BadRequestException {
  constructor(error?: string) {
    super('error.team-already-exists', error);
  }
}
