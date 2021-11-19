import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Model, ObjectId } from 'mongoose';
import { Exclude, Transform, Type } from 'class-transformer';
import { UnprocessableEntityException } from '@nestjs/common';
import { hash, compare } from 'bcryptjs';

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

UserSchema.pre('save', async function () {
  const user = this;

  let nullableFields = ['phone', 'email', 'apple_id', 'fb_id'];
  for (let i = 0; i < nullableFields.length; i++) {
    if (user.isModified(nullableFields[i])) {
      const value = user[nullableFields[i]];
      if (value === '' || value === null) user[nullableFields[i]] = undefined;
    }
  }

  let uniqueFields = ['phone', 'apple_id', 'fb_id', 'email'];
  for (let i = 0; i < uniqueFields.length; i++) {
    if (user.isModified(uniqueFields[i])) {
      // be true if was undefined then set value to it , be false if same value set to it
      let value = user[uniqueFields[i]];
      if (value === undefined) continue;
      let filter = {};
      filter[uniqueFields[i]] = value;
      let model = <Model<User>>this.constructor;
      let count = await model.countDocuments(filter);
      if (count) {
        throw new UnprocessableEntityException(
          `${uniqueFields[i]} : ${value} is not a uniqu value`,
        );
      }
    }
  }
  if ((this as UserDocument).password && this.isModified('password')) {
    console.log('here');
    (this as UserDocument).password = await hash(
      (this as UserDocument).password,
      10,
    ); // TODO make in separte class
  }
});

UserSchema.methods.isValidPassword = async function (password) {
  return compare(password, (this as UserDocument).password);
};

export { UserSchema };
