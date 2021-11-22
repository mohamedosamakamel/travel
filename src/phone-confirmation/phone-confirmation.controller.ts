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

@Controller('phone-confirmation')
export class PhoneConfirmationController {
  constructor(
    private readonly phoneConfirmationService: PhoneConfirmationService,
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
    return await this.phoneConfirmationService.verificationCode(verifyData);
  }
}
