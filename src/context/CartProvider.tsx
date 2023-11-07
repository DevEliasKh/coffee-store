import { useState, useEffect } from 'react';

import CartContext from './CartContext';
function CartProvider({ children }) {
  const [cart, UpdateCart] = useState(
    JSON.parse(localStorage.getItem('CartItem')) || []
  );

  useEffect(() => {
    localStorage.setItem('CartItem', JSON.stringify(cart));
  }, [cart]);

  return (
    <CartContext.Provider value={{ cart, UpdateCart }}>
      {children}
    </CartContext.Provider>
  );
}

CartProvider.defaultProps = {
  children: <div>CartProvider</div>
};
export default CartProvider;
