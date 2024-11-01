import { v4 } from 'uuid';

import * as crypto from 'crypto';

export const uuidString = (length: number): string => {
  const uuidv4 = v4();
  return uuidv4.replace(/-/g, '').substring(0, length);
};

export const md5 = (contents: string): string => {
  return crypto.createHash('md5').update(contents).digest('hex');
};
