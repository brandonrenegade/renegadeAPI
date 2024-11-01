import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { catchError, map, Observable, of } from 'rxjs';

@Injectable()
export class TransformInterceptor implements NestInterceptor {
  intercept(
    context: ExecutionContext,
    next: CallHandler<any>,
  ): Observable<any> {
    const now = Date.now();
    return next.handle().pipe(
      map((data) => {
        return {
          statusCode: context.switchToHttp().getResponse().statusCode,
          ...data,
        };
      }),
      catchError((err): any => {
        const request = context.switchToHttp().getRequest();
        const { params, query, body, url } = request;
        console.log({
          url,
          ...params,
          ...query,
          ...body,
          time: `${Date.now() - now}ms`,
        });

        if (err.message) {
          if (err.message.indexOf('error.') === 0) {
            return of({
              statusCode: 200,
              error: err.message,
            });
          } else if (Array.isArray(err.response?.message)) {
            return of({
              statusCode: 200,
              error: `error.invalid-${err.response.message[0].split(' ')[0]}`,
            });
          } else {
            console.error(err.message);
            return of({
              statusCode: 200,
              error: `error.internal-server-error`,
            });
          }
        }

        throw err;
      }),
    );
  }
}
