import { Injectable, UseFilters } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Student, StudentSchema } from './entities/student.entity';
import { Teacher } from './entities/teacher.entity';
import { User, UserDocument, UserSchema } from './entities/_user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name) private userModel: Model<UserDocument>,
    @InjectModel(Student.name) private studentModel: Model<Student>,
    @InjectModel(Teacher.name) private teacherModel: Model<Teacher>,
  ) {}

  create(createUserDto: CreateUserDto) {
    return 'This action adds a new user';
  }

  async findAll() {
    // await new this.teacherModel({
    //   username: 'Lolo Amr',
    //   email: 'remahTeach@gmail.com',
    //   password: '123456',
    //   bio: '1',
    // }).save();
    let users = await this.userModel.findById('6197e004a1142fa049ab941e');
    let test = await (users as any).isValidPassword('123456');
    console.log(test);
    return users;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
