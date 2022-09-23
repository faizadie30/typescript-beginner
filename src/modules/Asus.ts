import Laptop from './BaseLaptop';

class Asus<T> extends Laptop<T> {
  constructor(
    name: string,
    type: T,
    numeric: boolean,
    withTouchButton: boolean
  ) {
    super('Asus', type, numeric, withTouchButton);
  }
}

export default Asus;
