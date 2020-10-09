import { combineReducers } from 'redux';
import products from './products.reducer';
import productsInBasket from './productsInBasket.reducer';

export default combineReducers({
  products,
  productsInBasket,
});
