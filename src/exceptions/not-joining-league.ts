import { BadRequestException } from '@nestjs/common';

export class NotJoiningLeagueException extends BadRequestException {
  constructor(error?: string) {
    super('error.not-joining-league', error);
  }
}
