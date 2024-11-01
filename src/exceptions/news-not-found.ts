import { BadRequestException } from '@nestjs/common';

export class NewsNotFoundException extends BadRequestException {
  constructor(error?: string) {
    super('error.news-not-found', error);
  }
}
