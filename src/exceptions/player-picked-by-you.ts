import { BadRequestException } from '@nestjs/common';

export class PlayerPickedByYouException extends BadRequestException {
  constructor(error?: string) {
    super('error.player-picked-by-you', error);
  }
}
