import { createContext, useContext } from 'react';

const CartContext = createContext({
  Cart: [],
  UpdateCart: () => {}
});

export const useCartContext = () => useContext(CartContext);
export default CartContext;
