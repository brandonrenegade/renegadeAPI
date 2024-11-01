import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class ApiFailedResponse {
  @ApiProperty()
  @IsString()
  message = 'failed';
}
