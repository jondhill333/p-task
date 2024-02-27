import { Injectable } from '@nestjs/common';
import { Property, PropertyDocument } from './property.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { InjectConnection } from '@nestjs/mongoose';
import { Connection } from 'mongoose';

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
