import { Test, TestingModule } from '@nestjs/testing';
import { PropertiesService } from './properties.service';
import { PropertiesController } from './properties.controller';
import { getModelToken } from '@nestjs/mongoose';
import { Property } from './property.schema';
import { PropertyModel } from '../test/property.model';
import { propertyStub } from '../test/property.stub';

describe('Properties Service', () => {
  let propertiesService: PropertiesService;
  let propertyModel: PropertyModel;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PropertiesController],
      providers: [
        PropertiesService,
        {
          provide: getModelToken(Property.name),
          useValue: PropertyModel,
        },
      ],
    }).compile();

    propertiesService = module.get<PropertiesService>(PropertiesService);
    propertyModel = module.get<PropertyModel>(getModelToken(Property.name));
  });

  it('should be defined', () => {
    expect(propertiesService).toBeDefined();
    expect(propertyModel).toBeDefined();
  });

  describe('Create a property', () => {
    let property: Property;
    let createSpy: jest.SpyInstance;
    let constructorSpy: jest.SpyInstance;

    beforeEach(async () => {
      createSpy = jest.spyOn(PropertyModel.prototype, 'save');
      constructorSpy = jest.spyOn(PropertyModel.prototype, 'constructorSpy');
      property = await propertiesService.create(propertyStub());
    });

    test('it should call the propertyModel', () => {
      expect(createSpy).toHaveBeenCalled();
      expect(constructorSpy).toHaveBeenCalledWith(propertyStub());
    });

    test('it should return a user', () => {
      expect(property).toEqual(propertyStub());
    });
  });

  describe('Get properties', () => {
    let properties: Property[];
    let findSpy: jest.SpyInstance;

    beforeEach(async () => {
      findSpy = jest.spyOn(PropertyModel.prototype, 'find');
      properties = await propertiesService.getProperties();
    });

    test('it should call the propertyModel', () => {
      expect(findSpy).toHaveBeenCalled();
    });

    test('it should return the properties', () => {
      expect(properties).toEqual([propertyStub()]);
    });
  });
});
