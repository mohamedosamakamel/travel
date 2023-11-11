import { Module, forwardRef } from '@nestjs/common';
import { ItineraryService } from './itinerary.service';
import { ItineraryController } from './itinerary.controller';
import { ItineraryRepository } from './itinerary.repository';
import { MongooseModule } from '@nestjs/mongoose';
import { Itinerary, ItinerarySchema } from './entities/itinerary.entity';
import { OrderModule } from 'src/order/order.module';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Itinerary.name,
        schema: ItinerarySchema,
      },
    ]),
    forwardRef(() => OrderModule),
  ],
  controllers: [ItineraryController],
  providers: [ItineraryService, ItineraryRepository],
  exports: [ItineraryService, ItineraryRepository],
})
export class ItineraryModule {}
