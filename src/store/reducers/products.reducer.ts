import { Product } from '../../interfaces/product.interface';
import { BUY_ONE_GET_ONE_FREE, THREE_FOR_TWO} from '../../constants/policies.constants';

const initialState: Product[] = [
  {
    id: 1,
    name: 'Apples',
    code: 'apple',
    price: 0.6,
    policy: BUY_ONE_GET_ONE_FREE,
    policyDescription: 'Buy One Get One Free'
  },
  {
    id: 2,
    name: 'Oranges',
    code: 'orange',
    price: 0.25,
    policy: THREE_FOR_TWO,
    policyDescription: '3 for the price of 2 on',
  }
];

export default (products = initialState) => {
  return products;
}


