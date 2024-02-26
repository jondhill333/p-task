import { Module } from '@nestjs/common';
import { Property, propertySchema } from './property.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { PropertyController } from './property.controller';
import { PropertyService } from './property.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Property.name, schema: propertySchema },
    ]),
  ],
  controllers: [PropertyController],
  providers: [PropertyService],
})
export class PropertyModule {}
