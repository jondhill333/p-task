import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { v4 as uuid } from 'uuid';

export type PropertyDocument = Property & Document;

@Schema()
export class Property {
  @Prop()
  address: string;

  @Prop()
  image: string;

  @Prop()
  price: number;
}

export const propertySchema = SchemaFactory.createForClass(Property);
