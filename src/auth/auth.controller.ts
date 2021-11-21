import {
  Controller,
  Post,
  Body,
  HttpStatus,
  HttpCode,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/signup')
  async register(@Body() RegisterDto: RegisterDto) {
    let user = await this.authService.register(RegisterDto);
    // TODO handle twillio message
    return user;
  }

  @HttpCode(HttpStatus.OK)
  @Post('/login')
  async login(@Body() LoginDto: LoginDto) {
    return await this.authService.login(LoginDto);
  }
}
