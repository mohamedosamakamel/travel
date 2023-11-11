import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { OrderService } from './order.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AuthUser } from 'src/auth/decorators/me.decorator';
import { UserDocument } from 'src/users/models/_user.model';

@Controller('order')
@ApiTags('order')
@ApiBearerAuth()
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Post()
  create(@Body() createOrderDto: CreateOrderDto, @AuthUser() me: UserDocument) {
    return this.orderService.create(createOrderDto,me._id);
  }

  // @Get()
  // findAll() {
  //   return this.orderService.findAll();
  // }

  @Get('my-trips')
  findMyTrips(@AuthUser() me: UserDocument) {
    return this.orderService.fetchUserOrders(me._id);
  }

  @Get('user-trips/:id')
  findUserTrips(@Param('id') id: string) {
    return this.orderService.fetchUserOrders(id);
  }


  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.orderService.remove(id);
  }
}
