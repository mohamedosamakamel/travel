import { IsMongoId } from 'class-validator';

export class CreateOrderDto {
  @IsMongoId()
  ItineraryId: string;

  
}
