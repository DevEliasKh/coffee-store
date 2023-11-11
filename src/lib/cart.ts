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
  if (index != -1) {
    Cart.splice(index, 1);
  }
  const newCart = Cart;
  UpdateCart([...newCart]);
  console.log(Cart, newCart);
}
export function AddToCart(
  id: props['id'],
  Cart: props['Cart'],
  UpdateCart: props['UpdateCart']
) {
  UpdateCart([...Cart, id]);
}
