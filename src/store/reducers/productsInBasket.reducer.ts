import { Product } from '../../interfaces/product.interface';
import { ADD_TO_BASKET, REMOVE_FROM_BASKET} from '../actions/';
import { isProductInBasket } from '../../utils/app.util';

const initialState: Product[] = [];

export default (state = initialState, {type, payload}: any) => {
  switch (type) {
    case ADD_TO_BASKET:
      if (!isProductInBasket(state, payload)) {
        return [...state, payload];
      } else {
        return state;
      }
    case REMOVE_FROM_BASKET:
      return state.filter((product) => {
        return product.id !== payload.id;
      });
      
    default:
      return state;
  }
}
