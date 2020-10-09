import { Product } from '../../interfaces/product.interface';
import { THREE_FOR_TWO, TWO_FOR_ONE_POUND, BASE_ON_WEIGHT } from '../../constants/policies.constants';

const initialState: Product[] = [
  {
    id: 1,
    name: 'Beans',
    price: 0.5,
    policy: THREE_FOR_TWO,
  },
  {
    id: 2,
    name: 'Coke',
    price: 0.7,
    policy: TWO_FOR_ONE_POUND,
  },
  {
    id: 3,
    name: 'Oranges',
    price: 1.99,
    policy: BASE_ON_WEIGHT,
    unit: 'kg',
  }
];

export default (products = initialState) => {
  return products;
}


