import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
  Inject,
  UseFilters,
  UploadedFiles,
  ValidationPipe,
  UsePipes,
} from '@nestjs/common';
import { FileFieldsInterceptor } from '@nestjs/platform-express';
import { request } from 'http';
import { Roles } from 'src/auth/decorators/roles.decorator';
import { FilterUserDto } from './dto/filter-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User, UserRole } from './entities/_user.entity';
import { UsersService } from './users.service';
import { REQUEST } from '@nestjs/core';

@Controller('users')
export class UsersController {
  constructor(
    private readonly usersService: UsersService,
    @Inject(REQUEST) private readonly req: Record<string, unknown>,
  ) {}

  @Roles(UserRole.STUDENT)
  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Get('profile')
  async getProfile() {
    return await this.usersService.getProfile(this.req.me as User);
  }

  @Patch('profile')
  @UseInterceptors(FileFieldsInterceptor([{ name: 'photo', maxCount: 1 }]))
  async updateProfile(
    @UploadedFiles()
    files,
    @Body() updateUserData: UpdateUserDto,
  ) {
    if (files && files.photo) updateUserData.photo = files.photo[0].secure_url;
    return await this.usersService.update(
      { _id: this.req.me } as FilterUserDto,
      updateUserData,
    );
  }
}
