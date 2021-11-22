import { BadRequestException, Injectable } from '@nestjs/common';
import { CreatePhoneConfirmationDto } from './dto/create-phone-confirmation.dto';
import { InjectTwilio, TwilioClient } from 'nestjs-twilio';
import { VerifyPhoneDto } from './dto/verify-phone.dto';
import { UsersService } from 'src/users/users.service';
import { FilterUserDto } from 'src/users/dto/filter-user.dto';
import { UpdateUserDto } from 'src/users/dto/update-user.dto';

@Injectable()
export class PhoneConfirmationService {
  constructor(
    @InjectTwilio()
    private twilioClient: TwilioClient,
    private readonly userService: UsersService,
  ) {}

  async sendSMS(createPhoneConfirmationDto: CreatePhoneConfirmationDto) {
    try {
      return await this.twilioClient.verify
        .services(process.env.TWILIO_ACCOUNT_VERIFY_SID)
        .verifications.create({
          to: createPhoneConfirmationDto.phone,
          channel: 'sms',
        });
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  async verificationCode(verifyData: VerifyPhoneDto) {
    try {
      let verificationResult = await this.twilioClient.verify
        .services(process.env.TWILIO_ACCOUNT_VERIFY_SID)
        .verificationChecks.create({
          code: verifyData.code,
          to: verifyData.phone,
        });

      if (verificationResult.status !== 'approved')
        throw new BadRequestException('code is invalid');

      return await this.userService.update(
        { phone: verifyData.phone } as FilterUserDto,
        { enabled: true } as UpdateUserDto,
      );
    } catch (error) {
      return error;
    }
  }
}
