import { BadRequestException } from '@nestjs/common';

export class PickPlayerNotStartedYetException extends BadRequestException {
  constructor(error?: string) {
    super('error.pick-start-not-started-yet', error);
  }
}
