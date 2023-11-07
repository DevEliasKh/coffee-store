import { useContext } from 'react';
import CartContext from '/src/context/CartContext';

export default function Cart() {
  const cart = useContext(CartContext);
  console.log(cart);
  return <div>{cart}</div>;
}
