import { Product } from '../../interfaces/product.interface';
import { BUY_ONE_GET_ONE_FREE,  DISCOUNT_AFTER_THREE} from '../../constants/policies.constants';

const initialState: Product[] = [
  {
    id: 1,
    name: 'Green Tea',
    code: 'GR1',
    price: 3.11,
    policy: BUY_ONE_GET_ONE_FREE,
    policyDescription: 'Buy One Get One Free'
  },
  {
    id: 2,
    name: 'Strawberries',
    code: 'SR1',
    price: 5,
    policy: DISCOUNT_AFTER_THREE,
    policyDescription: 'buy 3 or more, price is £4.5',
  },
  {
    id: 3,
    name: 'Coffee',
    code: 'CF1',
    price: 11.23,
  }
];

export default (products = initialState) => {
  return products;
}


