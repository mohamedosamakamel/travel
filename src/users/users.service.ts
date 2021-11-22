import { BadRequestException, Injectable, UseFilters } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { FilterUserDto } from './dto/filter-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import {
  Student,
  StudentDocument,
  StudentSchema,
} from './entities/student.entity';
import { Teacher } from './entities/teacher.entity';
import { User, UserDocument, UserSchema } from './entities/_user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name) private userModel: Model<UserDocument>,
    @InjectModel(Student.name) private studentModel: Model<Student>,
    @InjectModel(Teacher.name) private teacherModel: Model<Teacher>,
  ) {}

  async create(registerationData: CreateUserDto) {
    const prevUser = await this.userModel.findOne({
      phone: registerationData.phone,
    });
    if (prevUser) throw new BadRequestException('phone should be unique');
    let student: StudentDocument = await new this.studentModel(
      registerationData,
    ).save();
    return student;
  }

  async findAll() {
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
    let users = await this.userModel.find();
    return users;
  }

  async findOne(filter: FilterUserDto) {
    return await this.userModel.findOne(filter);
  }

  async update(filter: FilterUserDto, updateUserData: UpdateUserDto) {
    return await this.userModel.updateOne(filter, updateUserData);
  }

  async getProfile(me: User) {
    return me;
  }
}
