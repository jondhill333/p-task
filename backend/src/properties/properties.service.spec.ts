import { Test, TestingModule } from '@nestjs/testing';
import { PropertiesService } from './properties.service';
import { PropertiesController } from './properties.controller';

describe('Properties Service', () => {
  let propertiesService: PropertiesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PropertiesController],
      providers: [PropertiesService],
    }).compile();

    propertiesService = module.get<PropertiesService>(PropertiesService);
  });

  it('should be defined', () => {
    expect(propertiesService).toBeDefined();
  });
});
