import { Product } from '../interfaces/product.interface';
import { THREE_FOR_TWO, TWO_FOR_ONE_POUND } from '../constants/policies.constants';

export const isProductInBasket = (products: Product[], product: Product): boolean => {
  return products.some(p => p.id === product.id);
}

export const ThreeForTwo = (product: Product) => {
  // get the rest quantity fo the product after divide it by 3
  const totalQuantity = product.quantity || 0;
  const newQuantity = Math.floor(totalQuantity / 3) * 2 + totalQuantity % 3;
  const newTotal = newQuantity * product.price;
  
  return  {
    total: newTotal,
    savedCost: product.price * totalQuantity - newTotal,
  }
}

export const twoForOnePound = (product: Product) => {
  const totalQuantity = product.quantity || 0;
  const numberOfTwo = Math.floor(totalQuantity / 2);
  const rest = totalQuantity % 2;
  const newTotal = numberOfTwo + rest * product.price;
  
  return {
    total: newTotal,
    savedCost: product.price * totalQuantity - newTotal,
  }
}

export const getTotalAndSavings = (product: Product) => {
  switch(product.policy) {
    case THREE_FOR_TWO:
      return ThreeForTwo(product);
    case TWO_FOR_ONE_POUND:
      return twoForOnePound(product);
    default:
      return {
        total: product.price * (product.quantity || 0),
        savedCost: 0,
      }
  }
}

export const formatPrice = (price: number | string): string => {
  return `£${Number(price).toFixed(2)}`;
}
