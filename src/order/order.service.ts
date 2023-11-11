import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { OrderRepository } from './order.repository';
import { ItineraryRepository } from 'src/itinerary/itinerary.repository';
import { FilterQuery, Types } from 'mongoose';
import { UserNotFoundException } from 'src/users/exceptions/userNotFound.exception';
import { OrderDocument } from './entities/order.entity';
import { ItineraryService } from 'src/itinerary/itinerary.service';

@Injectable()
export class OrderService {
  constructor(
    private readonly OrderRepository: OrderRepository,
    private readonly itineraryRepository: ItineraryRepository,
  ) {}
  async create(createOrderDto: CreateOrderDto, id: string) {
    const itinerary = await this.itineraryRepository.findOne({
      _id: new Types.ObjectId(createOrderDto.ItineraryId),
    });
    if (!itinerary) throw new NotFoundException();

    const isOrderReserved = await this.OrderRepository.findOne({
      user: new Types.ObjectId(id),
      ItineraryId: new Types.ObjectId(createOrderDto.ItineraryId),
    });
    if (isOrderReserved) throw new BadRequestException();
    return await this.OrderRepository.create({
      ItineraryId: new Types.ObjectId(createOrderDto.ItineraryId),
      user: id,
      price: itinerary.price,
    });
  }

  async fetchUserOrders(userId: string) {
    return await this.OrderRepository.fetchUserOrders({
      user: new Types.ObjectId(userId as string),
    });
  }

  async removeMany(filterQuery: FilterQuery<OrderDocument>) {
    await this.OrderRepository.removeMany(filterQuery);
  }

  // findAll() {
  //   return `This action returns all order`;
  // }

  // findOne(id: number) {
  //   return `This action returns a #${id} order`;
  // }

  // update(id: number, updateOrderDto: UpdateOrderDto) {
  //   return `This action updates a #${id} order`;
  // }

  async remove(id: string) {
    const isExisted = await this.OrderRepository.findOne({
      _id: new Types.ObjectId(id),
    });
    if (!isExisted) throw new NotFoundException();
    return await this.OrderRepository.deleteOne({
      _id: new Types.ObjectId(id),
    });
  }
}
