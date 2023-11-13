// import { useContext } from 'react';

// import useCartContext from '../context/CartContext.ts';

interface props {
  id: string;
  Cart: Array<Array<string | number>>;
  UpdateCart: (a: string[]) => void;
}

export function DecrementProductCount() {}
export function IncrementProductCount(
  id: props['id'],
  Cart: props['Cart'],
  UpdateCart: props['UpdateCart']
) {
  let index;
  for (let i = 0; i < Cart.length; i++) {
    if (Cart[i][0] == id) {
      index = i;
    }
  }
  if (index) {
    let amount = Cart[index][1];
    amount++;
    UpdateCart([...Cart, [id, amount]]);
  }
}
export function GetProductCount() {}
export function CalculateProductTotalCost() {}
export function RemoveFromCart(
  id: props['id'],
  Cart: props['Cart'],
  UpdateCart: props['UpdateCart']
) {
  for (let i = 0; i < Cart.length; i++) {
    const index = Cart[i].indexOf(id);
    if (index != -1) {
      Cart.splice(i, 1);
    }
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
  for (let i = 0; i < Cart.length; i++) {
    if (Cart[i].indexOf(id) != -1) {
      IncrementProductCount(id, Cart, UpdateCart);
    }
  }
  UpdateCart([...Cart, [id, 1]]);
}
