import { useState, useMemo, useEffect, createContext } from 'react';

const CartContext = createContext([]);
function CartProvider({ children }) {
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem('CartItem')) || []
  );

  const value = useMemo(() => [cart, setCart], [cart]);

  useEffect(() => {
    localStorage.setItem('CartItem', JSON.stringify(cart));
  }, [cart]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

CartProvider.defaultProps = {
  children: <div>CartProvider</div>
};
export default CartProvider;
