import { BadRequestException } from '@nestjs/common';

export class UserLeagueNotFoundException extends BadRequestException {
  constructor(error?: string) {
    super('error.user-league-not-found', error);
  }
}
