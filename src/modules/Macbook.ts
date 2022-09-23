import Laptop from './BaseLaptop';

class Macbook<T> extends Laptop<T> {
  constructor(
    name: string,
    type: T,
    numeric: boolean,
    withTouchButton: boolean
  ) {
    super('Macbook', type, numeric, withTouchButton);
  }
}

export default Macbook;
