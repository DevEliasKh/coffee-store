import { useContext } from 'react';
import CartContext from '../context/CartContext';
import CartProductCard from '../component/CartProductCard';
import productList from '../data/products.json';
import './Cart.scss';
import { Product } from '../model/product';

export default function Cart() {
  const { Cart } = useContext(CartContext);
  const uniqCart = [...new Set(Cart)];
  const AllProduct = productList.flatMap((group) => group.list);
  const product: Product[] = [];
  for (let i = 0; i < AllProduct.length; i++) {
    const item = AllProduct.find((Element) => Element.id === uniqCart[i]);
    if (item) {
      product.push(item);
    }
  }
  console.log(product);
  return (
    <>
      <div className="containerCart">
        <div className="cardsOfCart">
          {/* {#each $cartProductStore as product} */}
          {product.map((item) => {
            return <CartProductCard product={item} key={item.id} />;
          })}
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
