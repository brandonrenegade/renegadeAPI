import { BadRequestException } from '@nestjs/common';

export class UserTeamNotFoundException extends BadRequestException {
  constructor(error?: string) {
    super('error.user-team-not-found', error);
  }
}
