import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, ObjectId } from 'mongoose';
import { Exclude, Transform, Type } from 'class-transformer';

export type UserDocument = User & Document;

@Schema({
  discriminatorKey: 'role',
  timestamps: true,
  toJSON: {
    getters: true,
    virtuals: true,
    transform: (_, doc: Record<string, unknown>) => {
      delete doc.__v;
      return {
        ...doc,
      };
    },
  },
})
export class User {
  // @Transform(({ value }) => value.toString())
  @Exclude()
  _id: ObjectId;

  @Prop({ unique: true })
  email: string;

  @Prop()
  username: string;

  @Prop()
  @Exclude()
  password: string;
}

const UserSchema = SchemaFactory.createForClass(User);

export { UserSchema };
