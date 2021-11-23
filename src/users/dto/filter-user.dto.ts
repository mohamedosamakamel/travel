import {
  IsEmail,
  IsMongoId,
  IsOptional,
  IsString,
  Matches,
} from 'class-validator';
import { Constants } from '../../utils/constants';

export class FilterUserDto {
  @IsMongoId()
  _id?: string;

  @IsEmail()
  email?: string;

  @IsString()
  @Matches(Constants.PHONE_REGX, { message: 'phone is invalid' })
  phone?: string;

  @IsString()
  googleId?: string;

  @IsString()
  facebookId?: string;
}
