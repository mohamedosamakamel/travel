import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Model, ObjectId } from 'mongoose';
import { UnprocessableEntityException } from '@nestjs/common';
import { hash, compare } from 'bcryptjs';
import { Constants } from '../../utils/constants';
export type UserDocument = User & Document;

@Schema({
  discriminatorKey: 'role',
  timestamps: true,
  toJSON: {
    getters: true,
    virtuals: true,
    transform: (_, doc: Record<string, unknown>) => {
      delete doc.__v;
      delete doc._id;
      delete doc.password;
      return {
        ...doc,
      };
    },
  },
})
export class User {
  @Prop({
    index: true,
    unique: true,
    sparse: true,
    match: Constants.EMAIL_REGX,
    set: (email: string) => {
      if (email === null) return undefined;
    },
  })
  email: string;

  @Prop({
    index: true,
    unique: true,
    sparse: true,
    match: Constants.PHONE_REGX,
    required: true,
  })
  phone: string;

  @Prop({
    get: (username: string) => {
      return username.toUpperCase();
    },
    set: (username: string) => {
      return username.trim();
    },
    required: true,
  })
  username: string;

  @Prop()
  password: string;

  @Prop({ default: false })
  enabled: Boolean;
}

const UserSchema = SchemaFactory.createForClass(User);

// UserSchema.virtual('NameAndEmail').get(function (this: UserDocument) {
//   return `${this.email} + ${this.username}`;
// });

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
