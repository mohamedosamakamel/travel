import { CacheModule, Module, UseInterceptors } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { PhoneConfirmationModule } from './phone-confirmation/phone-confirmation.module';
import { DatabaseModule } from './database.module';
import { ChatModule } from './chat/chat.module';
import { MessageQueueModule } from './message-queue/message-queue-publisher.module';
import { CacheConfigService } from './utils/redis/cacheConfigService';
import { cacheOperationsModule } from './utils/redis/redis.module';
@Module({
  imports: [
    ConfigModule.forRoot(),
    DatabaseModule,
    UsersModule,
    AuthModule,
    PhoneConfirmationModule,
    ChatModule,
    // MessageQueueModule,
    cacheOperationsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
