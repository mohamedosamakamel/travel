import { BadRequestException, Injectable } from '@nestjs/common';
import { CreatePhoneConfirmationDto } from './dto/create-phone-confirmation.dto';
import { InjectTwilio, TwilioClient } from 'nestjs-twilio';
import { VerifyPhoneDto } from './dto/verify-phone.dto';

@Injectable()
export class PhoneConfirmationService {
  constructor(
    @InjectTwilio()
    private twilioClient: TwilioClient,
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
      throw error;
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
    } catch (error) {
      throw error;
    }
  }
}
