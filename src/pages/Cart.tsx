import { useContext } from 'react';
import CartContext from '../context/CartContext';
import CartProductCard from '../component/CartProductCard';
import productList from '../data/products.json';
import './Cart.scss';

export default function Cart() {
  const { Cart } = useContext(CartContext);
  const uniqCart = [...new Set(Cart)];
  const AllProduct = productList.flatMap((group) => group.list);
  const product = AllProduct.find((Element) => Element.id === uniqCart[0]);
  //   console.log(product);
  return (
    <>
      <div className="containerCart">
        <div className="cardsOfCart">
          {/* {#each $cartProductStore as product} */}
          <CartProductCard product={product} />
          {/* {/each} */}
        </div>
        <div>
          <div className="checkOut">
            {/* {#key $cartProductCountStore} */}
            <div className="total">
              Total:
              {/* ${getTotalCostOfAllProducts().toFixed(2)} */}
            </div>
            {/* {/key} */}
            <h2>pay the way you like</h2>
          </div>
        </div>
      </div>
    </>
  );
}
