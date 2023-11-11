import { IsMongoId, IsOptional } from 'class-validator';
import { Transform } from 'class-transformer';
import { escapeRegExp } from 'lodash';
import { PaginationParams } from 'src/utils/pagination/paginationParams.dto';
import { IntersectionType } from '@nestjs/swagger';

export class FilterQueryItinerary {
  @IsOptional()
  @Transform(({ obj }) => {
    return new RegExp(escapeRegExp(obj.name), 'i');
  })
  name?: string;
}

export class FilterQueryOptionsItinerary extends IntersectionType(
  FilterQueryItinerary,
  PaginationParams,
) {}
