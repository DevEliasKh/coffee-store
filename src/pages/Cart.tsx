import { useContext } from 'react';
import CartContext from '../context/CartContext';

export default function Cart() {
  const { Cart } = useContext(CartContext);
  console.log(Cart);
  return <div>{Cart}</div>;
}
