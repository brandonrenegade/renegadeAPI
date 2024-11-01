import { Injectable } from '@nestjs/common';
import * as randomstring from 'randomstring';
import { v4 } from 'uuid';

import * as crypto from 'crypto';

@Injectable()
export class UtilsService {
  static generateRandomString(length: number): string {
    return Math.random()
      .toString(36)
      .replace(/[^a-zA-Z0-9]+/g, '')
      .substring(0, length);
  }

  static uuidString(length: number): string {
    const uuidv4 = v4();
    return uuidv4.replace(/-/g, '').substring(0, length);
  }

  static randomString(length: number): string {
    return randomstring.generate(length);
  }

  static getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  static md5(contents: string): string {
    return crypto.createHash('md5').update(contents).digest('hex');
  }
}
