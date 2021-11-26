import { Module, UnprocessableEntityException } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserRole, UserSchema } from './entities/_user.entity';
import { Student, StudentSchema } from './entities/student.entity';
import { Teacher, TeacherSchema } from './entities/teacher.entity';
import * as mongoose from 'mongoose';
import { Model } from 'mongoose';
import { MulterModule } from '@nestjs/platform-express';
import { UploadCloudinary } from 'src/utils/services/upload-cloudinary';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: User.name,
        schema: UserSchema,
        discriminators: [
          { name: UserRole.STUDENT, schema: StudentSchema },
          { name: UserRole.TEACHER, schema: TeacherSchema },
        ],
      },
    ]),
    MulterModule.registerAsync({
      imports: [ConfigModule],
      useClass: UploadCloudinary,
      inject: [ConfigService],
    }),
  ],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}
