import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import {
  Document,
  Model,
  ObjectId,
  AcceptsDiscriminator,
  Types,
} from 'mongoose';
import { Itinerary } from 'src/itinerary/entities/itinerary.entity';
import { User } from 'src/users/models/_user.model';

export type OrderDocument = Order & Document;

@Schema({ timestamps: true })
export class Order {
  @Prop({ type: Types.ObjectId, required: true, ref: Itinerary.name })
  ItineraryId: string | Types.ObjectId;

  @Prop({ type: Number, required: true })
  price: number;

  @Prop({ type: Types.ObjectId, required: true, ref: User.name })
  user: string | Types.ObjectId;
}
const OrderSchema = SchemaFactory.createForClass(Order);
export { OrderSchema };
