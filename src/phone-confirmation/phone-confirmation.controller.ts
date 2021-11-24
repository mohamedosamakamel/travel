import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { PhoneConfirmationService } from './phone-confirmation.service';
import { CreatePhoneConfirmationDto } from './dto/create-phone-confirmation.dto';
import { VerifyPhoneDto } from './dto/verify-phone.dto';
import { Public } from 'src/auth/decorators/public.decorator';
import { UsersService } from 'src/users/users.service';
import { FilterUserDto } from 'src/users/dto/filter-user.dto';
import { UpdateUserDto } from 'src/users/dto/update-user.dto';

@Controller('phone-confirmation')
export class PhoneConfirmationController {
  constructor(
    private readonly phoneConfirmationService: PhoneConfirmationService,
    private readonly userService: UsersService,
  ) {}

  @Public()
  @HttpCode(HttpStatus.OK)
  @Post()
  async sendSMS(
    @Body() createPhoneConfirmationDto: CreatePhoneConfirmationDto,
  ) {
    return await this.phoneConfirmationService.sendSMS(
      createPhoneConfirmationDto,
    );
  }

  @Public()
  @HttpCode(HttpStatus.OK)
  @Post('verify')
  async verificationCode(@Body() verifyData: VerifyPhoneDto) {
    await this.phoneConfirmationService.verificationCode(verifyData);
    return await this.userService.update(
      { phone: verifyData.phone } as FilterUserDto,
      { enabled: true } as UpdateUserDto,
    );
  }
}
