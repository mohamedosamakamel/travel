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
  PaginateResult,
} from 'mongoose';
import { RegisterDto } from 'src/auth/dto/register.dto';
import { ChangePasswordDto } from 'src/users/dto/change-password.dto';
import { PaginationParams } from 'src/utils/paginationParams';
import { UpdateUserDto } from './dto/update-user.dto';
import {
  Student,
  StudentDocument,
  StudentSchema,
} from './models/student.model';
import { Teacher } from './models/teacher.model';
import { User, UserDocument, UserRole, UserSchema } from './models/_user.model';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name) private userModel: Model<UserDocument>,
    @InjectModel(UserRole.STUDENT) private studentModel: Model<Student>,
    @InjectModel(UserRole.TEACHER) private teacherModel: Model<Teacher>,
  ) {}

  async findAll(
    paginationOptions: PaginationParams,
  ): Promise<PaginateResult<UserDocument>> {
    let users = await (this.userModel as PaginateModel<UserDocument>).paginate(
      {} as FilterQuery<UserDocument>,
      paginationOptions,
    );
    return users;
  }

  async findOne(filter: FilterQuery<UserDocument>): Promise<UserDocument> {
    const user = await this.userModel.findOne(filter);
    return user;
  }

  async update(
    filter: FilterQuery<UserDocument>,
    updateUserData: UpdateUserDto,
  ): Promise<UserDocument> {
    let user = await this.userModel.findOne(filter);
    if (!user) throw new NotFoundException('user not found');
    await user.set(updateUserData).save();
    return user;
  }

  async getProfile(me: UserDocument): Promise<UserDocument> {
    return me;
  }

  async createUser(createUserData: CreateQuery<User>): Promise<UserDocument> {
    return await new this.userModel(createUserData).save();
  }

  async changePassword(
    { oldPassword, newPassword }: ChangePasswordDto,
    me: UserDocument,
  ): Promise<UserDocument> {
    if (!(await (me as any).isValidPassword(oldPassword)))
      throw new UnauthorizedException('password not match');

    return await this.update(
      { _id: me._id } as FilterQuery<UserDocument>,
      {
        password: newPassword,
      } as UpdateUserDto,
    );
  }
}

// await this.userModel.deleteMany();
// await new this.teacherModel({
//   username: 'Lolo Amr  ',
//   email: 'remahTeacdshe@gmail.com',
//   password: '123456',
//   bio: '1',
// }).save();
// let users = await this.userModel.findById('6197e004a1142fa049ab941e');
// let test = await (users as any).isValidPassword('123456');
// console.log(test);
