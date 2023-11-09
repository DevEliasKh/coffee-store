import { useState, useEffect } from 'react';

import CartContext from './CartContext';
function CartProvider({ children }: { children: JSX.Element[] }) {
  const [Cart, UpdateCart] = useState(
    JSON.parse(localStorage.getItem('CartItem') || '[]')
  );

  useEffect(() => {
    localStorage.setItem('CartItem', JSON.stringify(Cart));
  }, [Cart]);

  return (
    <CartContext.Provider value={{ Cart, UpdateCart }}>
      {children}
    </CartContext.Provider>
  );
}

CartProvider.defaultProps = {
  children: <div>CartProvider</div>
};
export default CartProvider;
