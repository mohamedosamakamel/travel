import { IsBoolean, IsMongoId, IsOptional, IsString } from 'class-validator';

export class UpdateUserDto {
  @IsBoolean()
  @IsOptional()
  enabled?: Boolean;

  @IsString()
  @IsOptional()
  photo?: string;

  @IsString()
  @IsOptional()
  password?: string;
}
