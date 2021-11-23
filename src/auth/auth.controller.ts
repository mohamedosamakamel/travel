import {
  Controller,
  Post,
  Body,
  HttpStatus,
  HttpCode,
  UseGuards,
  Inject,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';
import { Public } from './decorators/public.decorator';
import { PhoneConfirmationService } from 'src/phone-confirmation/phone-confirmation.service';
import { LoginGoogleDto } from './dto/login-google.dto';
import { GoogleOauthGuard } from './guards/googleToken.guard';
import { REQUEST } from '@nestjs/core';
import { User } from 'src/users/entities/_user.entity';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly phoneConfirmationService: PhoneConfirmationService,
    @Inject(REQUEST) private readonly req: Record<string, unknown>,
  ) {}

  @Public()
  @Post('/signup')
  async register(@Body() RegisterDto: RegisterDto) {
    let user = await this.authService.register(RegisterDto);
    await this.phoneConfirmationService.sendSMS({
      phone: RegisterDto.phone,
    });
    return user;
  }

  @Public()
  @HttpCode(HttpStatus.OK)
  @Post('/login')
  async login(@Body() LoginDto: LoginDto) {
    return await this.authService.login(LoginDto);
  }

  @Public()
  @HttpCode(HttpStatus.OK)
  @UseGuards(GoogleOauthGuard)
  @Post('/login-googel')
  async loginGoogle(@Body() LoginGoogleData: LoginGoogleDto) {
    return await this.authService.loginGoogle(this.req.me as User);
  }
}
