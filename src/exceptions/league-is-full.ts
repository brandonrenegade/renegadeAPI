import { BadRequestException } from '@nestjs/common';

export class LeagueIsFullException extends BadRequestException {
  constructor(error?: string) {
    super('error.league-is-full', error);
  }
}
