import { createContext, useContext } from 'react';

const CartContext = createContext({
  Cart: [] as Array<Array<string | number>>,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  UpdateCart: (_: string[]) => {}
});

export const useCartContext = () => useContext(CartContext);
export default CartContext;
