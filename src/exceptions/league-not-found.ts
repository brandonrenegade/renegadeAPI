import { BadRequestException } from '@nestjs/common';

export class LeagueNotFoundException extends BadRequestException {
  constructor(error?: string) {
    super('error.league-not-found', error);
  }
}
