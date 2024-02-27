import { propertyStub } from 'src/test/property.stub';

export const PropertiesService = jest.fn().mockReturnValue({
  create: jest.fn().mockResolvedValue(propertyStub()),
});
