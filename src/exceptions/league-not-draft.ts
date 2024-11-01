import { BadRequestException } from '@nestjs/common';

export class LeagueNotDraftException extends BadRequestException {
  constructor(error?: string) {
    super('error.league-not-draft', error);
  }
}
