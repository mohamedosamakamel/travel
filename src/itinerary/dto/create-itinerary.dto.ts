import {
  IsArray,
  IsDate,
  IsNotEmpty,
  IsNumber,
  IsString,
  ValidateNested,
} from 'class-validator';
import { Activity, Trip } from '../entities/itinerary.entity';
import { Type } from 'class-transformer';

export class TripDto {
  @IsString()
  @IsNotEmpty()
  destination: String;
  @IsNumber()
  time: Number;
}
export class ActivityDto {
  @IsString()
  @IsNotEmpty()
  name: String;
  @IsString()
  @IsNotEmpty()
  describtion: String;
}

export class CreateItineraryDto {

  @IsNotEmpty()
  @IsString()
  name: string;

  @IsDate()
  startDate: Date;

  @IsNotEmpty()
  @IsString()
  startLocation: string;

  @IsString()
  @IsNotEmpty()
  accommodationDetails: string;
  @IsString()
  @IsNotEmpty()
  transportationDetails: string;

  @ValidateNested({ each: true })
  @IsArray()
  @Type(() => TripDto)
  trips: Trip[];

  @ValidateNested({ each: true })
  @IsArray()
  @Type(() => ActivityDto)
  activities: Activity[];

  @IsNumber()
  price: number;
}
