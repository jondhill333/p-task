import { MockModel } from './mock.model';
import { Property } from '../properties/property.schema';
import { propertyStub } from './property.stub';

export class PropertyModel extends MockModel<Property> {
  protected propertyStub = propertyStub();
}
