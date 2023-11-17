import productList from '../data/products.json';

interface props {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  id: any;
  Cart: Array<Array<string | number>>;
  UpdateCart: (a: Array<Array<string | number>>) => void;
}

export function DecrementProductCount(Props: props) {
  const { id, Cart, UpdateCart } = Props;
  let index;
  for (let i = 0; i < Cart.length; i++) {
    if (Cart[i][0] == id) {
      index = i;
    }
  }
  console.log(Cart);
  if (index != undefined && index >= 0) {
    const newCart = [...Cart];
    let amount: number = Number(Cart[index][1]);
    newCart.splice(index, 1);
    UpdateCart([[id, --amount], ...newCart]);
    console.log(Cart);
  }
}
export function IncrementProductCount(Props: props) {
  const { id, Cart, UpdateCart } = Props;

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
    UpdateCart([[id, ++amount], ...newCart]);
  }
}
export function GetProductCount(Props: props) {
  let amount;
  const { id, Cart } = Props;

  Cart.map((item) => {
    if (item.indexOf(id) != -1) {
      const index = item.indexOf(id) + 1;
      amount = item[index];
    }
  });
  return amount;
}
export function CalculateProductTotalCost(Props: props) {
  const { id } = Props;
  const AllProduct = productList.flatMap((group) => group.list);
  const product = AllProduct.find((Element) => Element.id === id);
  const amount = GetProductCount(Props);
  let totalPrice;
  if (amount != undefined && product != undefined) {
    totalPrice = amount * product.price;
  }
  return totalPrice;
}
export function RemoveFromCart(Props: props) {
  const { id, Cart, UpdateCart } = Props;
  for (let i = 0; i < Cart.length; i++) {
    const index = Cart[i].indexOf(id);
    if (index != -1) {
      Cart.splice(i, 1);
    }
  }
  UpdateCart([...Cart]);
}
export function AddToCart(Props: props) {
  const { id, Cart, UpdateCart } = Props;
  const cartArray = Cart.flatMap((item) => item[0]);

  if (cartArray.indexOf(id) == -1) {
    UpdateCart([...Cart, [id, 1]]);
  }
}
export function getTotalCostOfAllProducts(Props: props) {
  let totalPriceCart = 0;
  const { Cart, UpdateCart } = Props;
  console.log(Cart);
  const shadowCopy = [...Cart];
  shadowCopy.map((item) => {
    const id: string | number = item[0];
    const itemPrice = CalculateProductTotalCost({ id, Cart, UpdateCart });
    if (itemPrice) {
      totalPriceCart = totalPriceCart + itemPrice;
    }
  });
  return totalPriceCart;
}
