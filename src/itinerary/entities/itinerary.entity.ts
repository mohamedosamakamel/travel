import { Prop, Schema, SchemaFactory, raw } from '@nestjs/mongoose';
import {
  Document,
  Model,
  ObjectId,
  AcceptsDiscriminator,
  Types,
} from 'mongoose';

export interface Trip {
  destination: String;
  time: Number;
}
export interface Activity {
  name: String;
  describtion: String;
}
export type ItineraryDocument = Itinerary & Document;

@Schema({ timestamps: true })
export class Itinerary {
  id?:string;
  
  @Prop({ required: true, type: String })
  name: string;

  @Prop({ required: true, type: Date })
  startDate: Date; 

  @Prop({ required: true, type: String })
  startLocation: String;

  @Prop({ type: String })
  transportationDetails: string;

  @Prop({ type: String })
  accommodationDetails: string;

  @Prop({ type: Number, default: 0 })
  price: number;

  @Prop(
    raw([
      {
        // id:false,
        destination: String,
        durationInMills: Number,
      },
    ]),
  )
  trips: Trip[];

  @Prop(
    raw([
      {
        name: String,
        describtion: String,
      },
    ]),
  )
  activities: Activity[];
}

const ItinerarySchema = SchemaFactory.createForClass(Itinerary);
export { ItinerarySchema };
