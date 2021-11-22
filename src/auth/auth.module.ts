import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsersModule } from 'src/users/users.module';
import { PhoneConfirmationModule } from 'src/phone-confirmation/phone-confirmation.module';

@Module({
  imports: [UsersModule, PhoneConfirmationModule],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
