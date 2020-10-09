import store from './store';
import { addToBasket, removeFromBasket } from './actions'

describe('store test', () => {
  it('test products in the store', () => {
    const state = store.getState();
    expect(state.products.length).toBe(3);
  });
  
  it('add product to basket', () => {
    let state = store.getState();
    expect(state.productsInBasket.length).toBe(0);
    store.dispatch(addToBasket(state.products[0]))
  });

  it('remove product from basket', () => {
    let state = store.getState();
    expect(state.productsInBasket.length).toBe(1);
    store.dispatch(removeFromBasket(state.products[0]));
    state = store.getState();
    expect(state.productsInBasket.length).toBe(0);
  });
});
