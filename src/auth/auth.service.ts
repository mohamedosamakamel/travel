import { Injectable, UnauthorizedException } from '@nestjs/common';
import { FilterUserDto } from 'src/users/dto/filter-user.dto';
import { UsersService } from 'src/users/users.service';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';
import * as jwt from 'jsonwebtoken';
import TokenPayload from './tokenPayload.interface';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UsersService,
  ) {}

  async register(registerationData: RegisterDto) {
    let user = await this.userService.create(registerationData);
    return user;
  }

  async login(loginDto: LoginDto) {
    const { phone } = loginDto;
    let user = await this.userService.findOne({ phone } as FilterUserDto);
    if (!user) throw new UnauthorizedException('invalid credentials');
    if (!(await (user as any).isValidPassword(loginDto.password)))
      throw new UnauthorizedException('invalid credentials');

    if (user.enabled === false)
      throw new UnauthorizedException('your account is deactivated');
    const payload: TokenPayload = {
      userId: user.id,
    };
    const options = {};
    const token = jwt.sign(payload, process.env.JWT_SECRET, options);
    return { user, token };
  }
}
