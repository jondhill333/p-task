import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { v4 as uuid } from 'uuid';

export type PropertyDocument = HydratedDocument<Property>;

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
