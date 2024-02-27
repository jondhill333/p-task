import { Property } from 'src/properties/property.schema';

export const propertyStub = (): Property => {
  return {
    address: '1234 Main St',
    image: 'imgeurl.com',
    price: 1000.0,
  };
};
