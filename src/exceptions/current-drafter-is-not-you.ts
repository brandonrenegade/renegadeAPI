import { BadRequestException } from '@nestjs/common';

export class CurrentDrafterIsNotYouException extends BadRequestException {
  constructor(error?: string) {
    super('error.current-drafter-is-not-you', error);
  }
}
