import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { Public } from './auth/decorators/public.decorator';
import { MessageQueueService } from './message-queue/message-queue.service';
import * as test from 'qiniu-js'
@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly messageQueueService: MessageQueueService,
  ) {}

  @Public()
  @Get()
  getHello() {
    const duration = 30000
    const start = Date.now();
    while (Date.now() - start < duration) {}
  }

  @Public()
  @Get('publisher')
  async publish() {
    await this.messageQueueService.publishToChannel({
      routingKey: 'test1',
      exchangeName: '',
      data: 'q',
    });
    return 'OK';
  }
}
