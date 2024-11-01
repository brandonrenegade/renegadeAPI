import { Global, Module } from '@nestjs/common';

import { Redis } from 'ioredis';

@Global()
@Module({
  providers: [
    {
      provide: 'REDIS_CLIENT',
      useFactory: () => {
        return new Redis(
          Number(process.env.REDIS_PORT),
          process.env.REDIS_HOST,
          {
            username: process.env.REDIS_USER,
            password: process.env.REDIS_PASSWORD,
          },
        );
      },
    },
  ],
  exports: ['REDIS_CLIENT'],
})
export class RedisModule {}
