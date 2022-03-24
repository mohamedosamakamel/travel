import {
  BadRequestException,
  Injectable,
  NotFoundException,
  UnauthorizedException,
  UseFilters,
  ValidationPipe,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import {
  CreateQuery,
  FilterQuery,
  Model,
  PaginateModel,
  PaginateOptions,
  PaginateResult,
  UpdateQuery,
} from 'mongoose';
import { ChangePasswordDto } from 'src/users/dto/change-password.dto';
import { FilterQueryOptionsUser } from './dto/filterQueryOptions.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User, UserDocument, UserRole, UserSchema } from './models/_user.model';
import * as _ from 'lodash';
import { UserRepository } from './users.repository';
import { cacheOperationsService } from 'src/utils/redis/cache.service';

@Injectable()
export class UsersService {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly cacheOperationsService: cacheOperationsService,
  ) {}

  async findAll(
    queryFiltersAndOptions: FilterQueryOptionsUser,
  ): Promise<PaginateResult<UserDocument> | UserDocument[]> {
    console.log('here');
    // await this.cacheOperationsService.clearCache(
    //   '/users?page=1&limit=8&allowPagination=true',
    // );
    const users = await this.userRepository.findAllWithPaginationOption(
      queryFiltersAndOptions,
      ['username'],
    );
    return users;
  }

  async findOne(filter: FilterQuery<UserDocument>): Promise<UserDocument> {
    const user = await this.userRepository.findOne(filter);
    return user;
  }

  async update(
    filter: FilterQuery<UserDocument>,
    updateUserData: UpdateUserDto,
  ): Promise<UserDocument> {
    const user = await this.userRepository.updateOne(filter, updateUserData);
    return user;
  }

  async getProfile(me: UserDocument): Promise<UserDocument> {
    return me;
  }

  async createUser(
    createUserData: CreateQuery<UserDocument>,
  ): Promise<UserDocument> {
    return await this.userRepository.create(createUserData);
  }

  async changePassword(
    { oldPassword, newPassword }: ChangePasswordDto,
    me: UserDocument,
  ): Promise<UserDocument> {
    if (!(await (me as any).isValidPassword(oldPassword)))
      throw new UnauthorizedException('password not match');

    return await this.userRepository.updateOne(
      { _id: me._id } as FilterQuery<UserDocument>,
      { password: newPassword } as UpdateQuery<UserDocument>,
    );
  }
}
