import { BadRequestException } from '@nestjs/common';

export class UserSettingNotFoundException extends BadRequestException {
  constructor(error?: string) {
    super('error.user-setting-not-found', error);
  }
}
