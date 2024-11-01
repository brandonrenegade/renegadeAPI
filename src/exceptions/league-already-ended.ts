import { BadRequestException } from '@nestjs/common';

export class LeagueAlreadyEndedException extends BadRequestException {
  constructor(error?: string) {
    super('error.league-already-ended', error);
  }
}
