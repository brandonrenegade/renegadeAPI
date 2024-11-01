import { BadRequestException } from '@nestjs/common';

export class LeagueAlreadyPickException extends BadRequestException {
  constructor(error?: string) {
    super('error.league-already-pick', error);
  }
}
