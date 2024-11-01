import { BadRequestException } from '@nestjs/common';

export class TeamNotEnoughException extends BadRequestException {
  constructor(error?: string) {
    super('error.team-not-enough', error);
  }
}
