import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { Public } from './auth/decorators/public.decorator';
import { MessageQueueService } from './message-queue/message-queue.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService,private readonly messageQueueService: MessageQueueService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Public()
  @Get('publisher')
  async publish() {
    await this.messageQueueService.publishToChannel({
      routingKey: 'test1',
      exchangeName: '',
      data: 'remah',
    });
    return 'OK';
  }
}
