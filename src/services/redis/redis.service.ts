import { Inject, Injectable } from '@nestjs/common';

import Redis from 'ioredis';

@Injectable()
export class RedisService {
  constructor(@Inject('REDIS_CLIENT') private readonly redisClient: Redis) {}

  async setValue(key: string, value: any, seconds?: number): Promise<void> {
    if (seconds) {
      await this.redisClient.set(key, JSON.stringify(value), 'EX', seconds);
    } else {
      await this.redisClient.set(key, JSON.stringify(value));
    }
  }

  async getValue(key: string): Promise<any> {
    const value = await this.redisClient.get(key);
    return value ? JSON.parse(value) : null;
  }

  async lpush(key: string, values: any) {
    await this.redisClient.lpush(key, ...values);
  }

  async rpop(key: string) {
    const value = await this.redisClient.rpop(key);
    return value;
  }

  async del(key: string) {
    await this.redisClient.del(key);
  }
}
