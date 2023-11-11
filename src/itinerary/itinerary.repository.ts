import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { FilterQuery, Model } from 'mongoose';
import { BaseAbstractRepository } from 'src/utils/base.abstract.repository';
import { Itinerary, ItineraryDocument } from './entities/itinerary.entity';

@Injectable()
export class ItineraryRepository extends BaseAbstractRepository<Itinerary> {
  constructor(
    @InjectModel(Itinerary.name) private itineraryModel: Model<ItineraryDocument>,
  ) {
    super(itineraryModel);
  }
}
