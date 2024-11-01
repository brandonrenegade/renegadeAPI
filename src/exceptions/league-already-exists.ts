import { BadRequestException } from '@nestjs/common';

export class LeagueAlreadyExistsException extends BadRequestException {
  constructor(error?: string) {
    super('error.league-already-exists', error);
  }
}
