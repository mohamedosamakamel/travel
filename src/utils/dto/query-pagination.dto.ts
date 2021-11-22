import { IsOptional, IsPositive } from 'class-validator';

export class QueryPaginationDto {
  @IsOptional()
  @IsPositive()
  limit?: number = 10; // here is powerful of transformOptions: true , also how to set default values

  @IsOptional()
  @IsPositive()
  offset: number;
}
