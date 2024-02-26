import { Injectable } from '@nestjs/common';

@Injectable()
export class PropertyService {
  getHello(): string {
    return 'I am the property service!';
  }
}
