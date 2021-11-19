import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type StudentDocument = Student & Document;

@Schema()
export class Student {
  role: string;
}

const StudentSchema = SchemaFactory.createForClass(Student);

export { StudentSchema };
