import { createContext, useContext } from 'react';

const CartContext = createContext({
  Cart: new Array<[string | number]>(),
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  UpdateCart: (_: Array<Array<string | number>>) => {}
});

export const useCartContext = () => useContext(CartContext);
export default CartContext;
