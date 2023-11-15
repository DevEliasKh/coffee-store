import { useContext } from 'react';
import useCartContext from '../context/CartContext.ts';

import CartProductCard from '../component/CartProductCard';
import productList from '../data/products.json';
import './Cart.scss';
import { Product } from '../model/product';
// import { getTotalCostOfAllProducts } from '../lib/cart';

export default function Cart() {
  const { Cart } = useContext(useCartContext);

  const uniqCart = [...new Set(Cart)];
  const AllProduct = productList.flatMap((group) => group.list);
  const product: Product[] = [];
  for (let i = 0; i < uniqCart.length; i++) {
    const item = AllProduct.find((Element) => Element.id == uniqCart[i][0]);
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
              {/* {getTotalCostOfAllProducts({ Cart, UpdateCart }).toFixed(2)} */}
            </div>

            <h2>pay the way you like</h2>
          </div>
        </div>
      </div>
    </>
  );
}
