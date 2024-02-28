import {
  Body,
  Controller,
  Get,
  HttpException,
  Post,
  HttpStatus,
} from '@nestjs/common';
import { PropertiesService } from './properties.service';
import { CreatePropertyDto } from './dtos/create-property.dto';
import { Property } from './property.schema';

@Controller('properties')
export class PropertiesController {
  constructor(private readonly propertiesService: PropertiesService) {}

  @Get()
  getProperties(): Promise<Property[]> {
    try {
      return this.propertiesService.getProperties();
    } catch (error) {
      console.log(error);
      throw new HttpException(
        { message: error.detail },
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  @Post()
  create(@Body() body: CreatePropertyDto) {
    try {
      const property = this.propertiesService.create(body);

      return {
        property,
        message: 'Sucessfully created property',
      };
    } catch (error) {
      console.log(error);
      throw new HttpException(
        { message: error.detail },
        HttpStatus.BAD_REQUEST,
      );
    }
  }
}
