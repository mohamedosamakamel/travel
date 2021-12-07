import { IsBoolean, IsMongoId, IsOptional, IsString } from 'class-validator';

export class UpdateUserDto {
  @IsBoolean()
  @IsOptional()
  enabled?: boolean;

  @IsString()
  @IsOptional()
  photo?: string;

  @IsString()
  @IsOptional()
  password?: string;
}
