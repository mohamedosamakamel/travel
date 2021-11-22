import { IsEmail, IsOptional, IsString, Matches } from 'class-validator';
import { Constants } from '../../utils/constants';

export class FilterUserDto {
  @IsEmail()
  email?: string;

  @IsString()
  @Matches(Constants.PHONE_REGX, { message: 'phone is invalid' })
  phone?: string;
}
