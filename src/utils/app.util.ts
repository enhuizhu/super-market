import { Product } from '../interfaces/product.interface';

export const isProductInBasket = (products: Product[], product: Product): boolean => {
  return products.some(p => p.id === product.id);
}

export const ThreeForTwo = (product: Product) => {
  // get the rest quantity fo the product after divide it by 3
  const totalQuantity = product.quantity || 0;
  const newQuantity = Math.floor(totalQuantity / 3) * 2 + totalQuantity % 3;
  const newTotal = newQuantity * product.price;
  
  return  {
    total: newTotal.toFixed(2),
    savedCost: (product.price * totalQuantity - newTotal).toFixed(2),
  }
}

export const twoForOnePound = (product: Product) => {
  const totalQuantity = product.quantity || 0;
  const numberOfTwo = Math.floor(totalQuantity / 2);
  const rest = totalQuantity % 2;
  const newTotal = numberOfTwo + rest * product.price;
  
  return {
    total: newTotal.toFixed(2),
    savedCost: (product.price * totalQuantity - newTotal).toFixed(2),
  }
}

