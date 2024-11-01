import { BadRequestException } from '@nestjs/common';

export class PlayerNotFoundException extends BadRequestException {
  constructor(error?: string) {
    super('error.player-not-found', error);
  }
}
