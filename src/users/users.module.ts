import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './entities/_user.entity';
import { Student, StudentSchema } from './entities/student.entity';
import { Teacher, TeacherSchema } from './entities/teacher.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: User.name,
        schema: UserSchema,
        discriminators: [
          { name: Student.name, schema: StudentSchema },
          { name: Teacher.name, schema: TeacherSchema },
        ],
      },
    ]),
  ],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
