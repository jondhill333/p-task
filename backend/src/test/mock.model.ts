export abstract class MockModel<T> {
  protected abstract propertyStub: T;

  constructor(createPropertyDto: T) {
    this.constructorSpy(createPropertyDto);
  }

  constructorSpy(_createPropertyDto: T): void {}

  async save(): Promise<T> {
    return this.propertyStub;
  }

  async find(): Promise<{ exec: () => T[] }> {
    return {
      exec: () => [this.propertyStub],
    };
  }
}
