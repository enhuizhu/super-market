import { Product } from '../../interfaces/product.interface';
export const ADD_TO_BASKET = 'ADD_TO_BASKET';
export const REMOVE_FROM_BASKET = 'REMOVE_FROM_BASKET';


export const addToBasket = (payload: Product) => ({
  type: ADD_TO_BASKET,
  payload,
});

export const removeFromBasket = () => {
  
}
