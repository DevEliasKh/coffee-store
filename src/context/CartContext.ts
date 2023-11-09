import { createContext, useContext } from 'react';

const CartContext = createContext({
  Cart: [] as string[],
  UpdateCart: (_: string[]) => {}
});

export const useCartContext = () => useContext(CartContext);
export default CartContext;
