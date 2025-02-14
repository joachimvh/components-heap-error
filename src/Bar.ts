import { Foo } from './index';

export class Bar {
  public constructor(
    public foo: Foo,
  ) {
    console.log('Bar', foo.secret);
  }
}
