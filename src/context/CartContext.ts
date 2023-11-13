import { createContext, useContext } from 'react';

const CartContext = createContext({
  Cart: new Map<string, number>(),
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  UpdateCart: (_: string[]) => {}
});

export const useCartContext = () => useContext(CartContext);
export default CartContext;
