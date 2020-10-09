import { Product } from '../interfaces/product.interface';
import { isProductInBasket, ThreeForTwo, twoForOnePound } from './app.util';

describe('app util test', () => {
  it('check if product in the basket', () => {
    let products = [
      {
        id: 1,
        name: 'test1',
        price: 5,
      },
      {
        id: 2,
        name: 'test2',
        price: 5,
      }
    ];

    let product = {
      id: 3,
      name: 'test3',
      price: 6,
    }

    expect(isProductInBasket(products, product)).toBe(false);
    product = products[1];
    expect(isProductInBasket(products, product)).toBe(true);
  });

  it('test total value and saved cost after apply three for two', () => {
    let product: Product = {
      id: 1, 
      price: 1,
      name: 'test',
      quantity: 3,
    };
    let result = ThreeForTwo(product)
    expect(result.total).toBe("2.00");
    expect(result.savedCost).toBe("1.00");

    product.quantity = 1;
    result = ThreeForTwo(product)
    expect(result.total).toBe("1.00");
    expect(result.savedCost).toBe("0.00");
    
    product.quantity = 2;
    result = ThreeForTwo(product)
    expect(result.total).toBe("2.00");
    expect(result.savedCost).toBe("0.00");


    product.quantity = 4;
    result = ThreeForTwo(product)
    expect(result.total).toBe("3.00");
    expect(result.savedCost).toBe("1.00");

    product.quantity = 5;
    result = ThreeForTwo(product)
    expect(result.total).toBe("4.00");
    expect(result.savedCost).toBe("1.00");

    product.quantity = 6;
    result = ThreeForTwo(product)
    expect(result.total).toBe("4.00");
    expect(result.savedCost).toBe("2.00");
  });

  it('twoForOnePound', () => {
    let product: Product = {
      id: 1, 
      price: 0.7,
      name: 'test',
      quantity: 1,
    };

    let result = twoForOnePound(product);
    expect(result.total).toBe("0.70");
    expect(result.savedCost).toBe("0.00");

    product.quantity = 2;
    result = twoForOnePound(product);
    expect(result.total).toBe("1.00");
    expect(result.savedCost).toBe("0.40");
  });
});