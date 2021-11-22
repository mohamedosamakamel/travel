import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsersModule } from 'src/users/users.module';
import { PhoneConfirmationModule } from 'src/phone-confirmation/phone-confirmation.module';
import { APP_GUARD } from '@nestjs/core';
import { ApiKeyGuard } from './guards/api-key.guard';
import { RolesGuard } from './guards/roles.guard';

@Module({
  imports: [UsersModule, PhoneConfirmationModule],
  controllers: [AuthController],
  providers: [
    AuthService,
    { provide: APP_GUARD, useClass: ApiKeyGuard },
    { provide: APP_GUARD, useClass: RolesGuard },
  ],
})
export class AuthModule {}
