import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateItineraryDto } from './dto/create-itinerary.dto';
import { UpdateItineraryDto } from './dto/update-itinerary.dto';
import { ItineraryRepository } from './itinerary.repository';
import { FilterQueryOptionsItinerary } from './dto/filterQueryOptions.dto';
import { PaginateResult, Types } from 'mongoose';
import { ItineraryDocument } from './entities/itinerary.entity';
import { OrderService } from 'src/order/order.service';

@Injectable()
export class ItineraryService {
  constructor(
    private readonly ItineraryRepository: ItineraryRepository,
    private readonly OrderService: OrderService,
  ) {}
  async create(createItineraryDto: CreateItineraryDto) {
    return await this.ItineraryRepository.createDoc(createItineraryDto);
  }

  async findAll(
    queryFiltersAndOptions: FilterQueryOptionsItinerary,
  ): Promise<PaginateResult<ItineraryDocument> | ItineraryDocument[]> {
    const itineraries =
      await this.ItineraryRepository.findAllWithPaginationOption(
        queryFiltersAndOptions,
        ['name'],
      );
    return itineraries;
  }

  async findOne(id: string): Promise<ItineraryDocument> {
    const isExisted = await this.ItineraryRepository.findOne({
      _id: new Types.ObjectId(id),
    });
    if (!isExisted) throw new NotFoundException();
    return isExisted;
  }

  async update(id: string, updateItineraryDto: UpdateItineraryDto) {
    return await this.ItineraryRepository.updateOne(
      { _id: new Types.ObjectId(id) },
      updateItineraryDto,
    );
  }

  async remove(id: string) {
    await this.OrderService.removeMany({ ItineraryId: new Types.ObjectId(id) });
    return await this.ItineraryRepository.deleteOne({
      _id: new Types.ObjectId(id),
    });
  }
}
