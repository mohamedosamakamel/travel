import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { Public } from './auth/decorators/public.decorator';
import { MessageQueueService } from './message-queue/message-queue.service';
import * as os from 'os';
import { UserRepository } from 'src/users/users.repository';
@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService, // private readonly messageQueueService: MessageQueueService,
    private readonly UserRepository: UserRepository
  ) { }

  @Public()
  @Get()
  async getHello() {
    await this.wait(10000)
    let test = await this.UserRepository.findOne({})
    console.log(test)
    return { host: os.hostname() };
  }

  wait(ms) {
    let start = new Date().getTime();
    let end = start;
    while (end < start + ms) {
      end = new Date().getTime();
    }
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
