import { BadRequestException } from '@nestjs/common';

export class AlreadyJoinLeagueException extends BadRequestException {
  constructor(error?: string) {
    super('error.already-join-league', error);
  }
}
