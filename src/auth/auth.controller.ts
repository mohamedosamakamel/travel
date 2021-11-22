import { Controller, Post, Body, HttpStatus, HttpCode } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';
import { Public } from './decorators/public.decorator';
import { PhoneConfirmationService } from 'src/phone-confirmation/phone-confirmation.service';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly phoneConfirmationService: PhoneConfirmationService,
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
}
