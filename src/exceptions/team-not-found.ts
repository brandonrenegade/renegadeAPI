import { BadRequestException } from '@nestjs/common';

export class TeamNotFoundException extends BadRequestException {
  constructor(error?: string) {
    super('error.team-not-found', error);
  }
}
