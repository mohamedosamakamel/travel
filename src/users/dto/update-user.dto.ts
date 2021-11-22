import { IsBoolean, IsMongoId } from 'class-validator';

export class UpdateUserDto {
  @IsBoolean()
  enabled: Boolean;
}
