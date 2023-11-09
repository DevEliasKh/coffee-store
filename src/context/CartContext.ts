import { createContext, useContext } from 'react';

const CartContext = createContext({
  Cart: [] as string[],
  UpdateCart: () => {}
});

export const useCartContext = () => useContext(CartContext);
export default CartContext;
