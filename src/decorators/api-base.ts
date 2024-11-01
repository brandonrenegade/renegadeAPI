import { applyDecorators, HttpCode, HttpStatus, Type } from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiBody,
  ApiInternalServerErrorResponse,
  ApiOperation,
  ApiQuery,
  ApiResponse,
} from '@nestjs/swagger';

import { ApiErrorResponse } from '@dtos/api';

export enum RequestType {
  BODY = 'body',
  PARAM = 'param',
  QUERY = 'query',
}

export function ApiBase(
  description?: string,
  status = HttpStatus.OK,
  responseType: Type<unknown> | Function | [Function] | string = '',
  payloadType: Type<unknown> | Function | [Function] | string = '',
  requestType: RequestType = RequestType.PARAM,
) {
  let statusDescription = 'OK';
  if (status === HttpStatus.CREATED) {
    statusDescription = 'Created';
  }

  let applyDecor = null;
  const noop = () => null;
  applyDecor = applyDecorators(
    HttpCode(status),
    ApiOperation({ description }),
    ApiResponse({
      status,
      type: responseType,
      description: statusDescription,
    }),
    ApiBadRequestResponse({
      type: ApiErrorResponse,
      description: 'Bad Request',
    }),
    ApiInternalServerErrorResponse({
      type: ApiErrorResponse,
      description: 'Internal server error',
    }),
    requestType === RequestType.BODY ? ApiBody({ type: payloadType }) : noop,
    requestType === RequestType.QUERY ? ApiQuery({ type: payloadType }) : noop,
  );

  return applyDecor;
}
