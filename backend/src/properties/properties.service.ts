import { Injectable } from '@nestjs/common';
import { Property } from './property.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class PropertiesService {
  constructor(
    @InjectModel(Property.name) private propertyModel: Model<Property>,
  ) {}

  create(createPropertyDto): Promise<Property> {
    const newProperty = new this.propertyModel(createPropertyDto);
    return newProperty.save();
  }
}
