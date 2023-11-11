import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { FilterQuery, Model } from 'mongoose';
import { BaseAbstractRepository } from 'src/utils/base.abstract.repository';
import { OrderDocument, Order } from './entities/order.entity';

@Injectable()
export class OrderRepository extends BaseAbstractRepository<Order> {
  constructor(
    @InjectModel(Order.name) private orderModel: Model<OrderDocument>,
  ) {
    super(orderModel);
  }

  async removeMany(filterQuery: FilterQuery<OrderDocument>) {
    await this.orderModel.deleteMany(filterQuery);
  }

  async fetchUserOrders(filterQuery: FilterQuery<OrderDocument>) {
    await this.orderModel
      .find(filterQuery)
      .populate([{ path: 'ItineraryId' }, { path: 'user' }]);
  }
}
