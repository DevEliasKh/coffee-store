import { useContext } from 'react';
import useCartContext from '../context/CartContext.ts';

import CartProductCard from '../component/CartProductCard';
import productList from '../data/products.json';
import './Cart.scss';
import { Product } from '../model/product';
import { getTotalCostOfAllProducts } from '../lib/cart';

export default function Cart() {
  const { Cart, UpdateCart } = useContext(useCartContext);

  const AllProduct = productList.flatMap((group) => group.list);
  let id;
  const product: Product[] = [];
  for (let i = 0; i < Cart.length; i++) {
    const item = AllProduct.find((Element) => Element.id == Cart[i][0]);
    if (item) {
      product.push(item);
    }
  }
  return (
    <>
      <div className="containerCart">
        <div className="cardsOfCart">
          {product.map((item) => {
            return <CartProductCard product={item} key={item.id} />;
          })}
        </div>
        <div>
          <div className="checkOut">
            <div className="total">
              Total: $
              {getTotalCostOfAllProducts({ id, Cart, UpdateCart }).toFixed(2)}
            </div>

            <h2>pay the way you like</h2>
          </div>
        </div>
      </div>
    </>
  );
}
