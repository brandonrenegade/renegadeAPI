import { BadRequestException } from '@nestjs/common';

export class LeagueAlreadyStartedException extends BadRequestException {
  constructor(error?: string) {
    super('error.league-already-started', error);
  }
}
