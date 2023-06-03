import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { Public } from './auth/decorators/public.decorator';
import { MessageQueueService } from './message-queue/message-queue.service';
import * as os from 'os';
@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService, // private readonly messageQueueService: MessageQueueService,
  ) {}

  @Public()
  @Get()
  getHello() {
    return { host: os.hostname() };
  }

  @Public()
  @Get('health')
  health() {
    return { healthStatus: 'OK' };
  }

  // @Public()
  // @Get('publisher')
  // async publish() {
  //   await this.messageQueueService.publishToChannel({
  //     routingKey: 'test1',
  //     exchangeName: '',
  //     data: 'q',
  //   });
  //   return 'OK';
  // }
}
