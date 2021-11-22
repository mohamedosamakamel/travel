import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
  UseFilters,
} from '@nestjs/common';
import { Roles } from 'src/auth/decorators/roles.decorator';
import { UserRole } from './entities/_user.entity';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Roles(UserRole.STUDENT)
  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Get('profile')
  async getProfile() {
    return await this.usersService.getProfile();
  }
}
