interface props {
  id: string;
  Cart: Map<string, number>;
  UpdateCart: (a: string[]) => void;
}

export function DecrementProductCount() {}
export function IncrementProductCount(
  id: props['id'],
  Cart: props['Cart'],
  UpdateCart: props['UpdateCart']
) {
  console.log(id);
  let index;
  for (let i = 0; i < Cart.length; i++) {
    if (Cart[i][0] == id) {
      index = i;
    }
  }
  //   console.log(Cart);
  if (index != undefined && index >= 0) {
    const newCart = [...Cart];
    let amount: number = Number(Cart[index][1]);
    newCart.splice(index, 1);
    UpdateCart([...newCart, [id, amount++]]);
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
}
export function AddToCart(
  id: props['id'],
  Cart: props['Cart'],
  UpdateCart: props['UpdateCart']
) {
  Cart.map((item) => {
    if (item.indexOf(id) != 0) {
      IncrementProductCount(id, Cart, UpdateCart);
    }
  });

  UpdateCart([...Cart, [id, 1]]);
}
