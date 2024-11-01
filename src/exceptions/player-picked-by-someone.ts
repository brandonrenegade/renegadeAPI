import { BadRequestException } from '@nestjs/common';

export class PlayerPickedBySomeoneException extends BadRequestException {
  constructor(error?: string) {
    super('error.player-picked-by-someone', error);
  }
}
