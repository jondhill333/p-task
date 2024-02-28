import { Test, TestingModule } from '@nestjs/testing';
import { PropertiesService } from './properties.service';
import { PropertiesController } from './properties.controller';
import { Property } from './property.schema';
import { getModelToken } from '@nestjs/mongoose';
import { CreatePropertyDto } from './dtos/create-property.dto';
import { propertyStub } from '../test/property.stub';
import { PropertyModel } from '../test/property.model';

describe('Properties Controller', () => {
  let propertiesService: PropertiesService;
  let propertiesController: PropertiesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [],
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
    propertiesController =
      module.get<PropertiesController>(PropertiesController);
  });
  // jest.clearAllMocks();

  it('should be defined', () => {
    expect(propertiesService).toBeDefined();
    expect(propertiesController).toBeDefined();
  });

  describe('create property', () => {
    let property;
    let createPropertyDto: CreatePropertyDto;
    let createSpy: jest.SpyInstance;

    beforeEach(async () => {
      createPropertyDto = {
        address: 'bbbbb',
        image: 'aaaaa',
        price: 800.0,
      };
      createSpy = jest
        .spyOn(propertiesService, 'create')
        .mockResolvedValue(createPropertyDto);
      property = await propertiesController.create(createPropertyDto);
    });

    test('then it should call usersService', () => {
      expect(createSpy).toHaveBeenCalledWith(createPropertyDto);
    });

    test('then it should return a property', () => {
      expect(property).toEqual(createPropertyDto);
    });
  });
});
