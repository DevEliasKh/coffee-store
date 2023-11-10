// import { useContext } from 'react';

// import useCartContext from '../context/CartContext.ts';

interface props {
  id: string;
  Cart: Array<string>;
  UpdateCart: (a: string[]) => void;
}

export function DecrementProductCount() {}
export function GetProductCount() {}
export function CalculateProductTotalCost() {}
export function RemoveFromCart(
  id: props['id'],
  Cart: props['Cart'],
  UpdateCart: props['UpdateCart']
) {
  const index = Cart.indexOf(id);
  const newCart = Cart.slice(0, index - 1).concat(Cart.slice(index + 1));
  UpdateCart(newCart);
}
export function AddToCart(
  id: props['id'],
  Cart: props['Cart'],
  UpdateCart: props['UpdateCart']
) {
  UpdateCart([...Cart, id]);
}
