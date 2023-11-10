import './CartProductCard.scss';
import { RemoveFromCart } from '../lib/cart';
import { useContext } from 'react';
import useCartContext from '../context/CartContext.ts';
import type { Product } from '../model/product.ts';

interface props {
  product: Product;
}
export default function CartProductCard({ product }: props) {
  const { Cart, UpdateCart } = useContext(useCartContext);
  return (
    <div className="CartCard">
      <img src={product.imageSrc} alt={product.name} />
      <div className="info">
        <div className="name">{product.name}</div>
        <div className="shop-product">
          <div className="btnGroup">
            {/* <button onClick={() => decrementProductCount(product)}></button> */}
            {/* <div className="amount">{getProductCount(product)}</div> */}
            {/* <button onClick={() => incrementProductCount(product)}></button> */}
          </div>
          <div className="price">
            {/* {calculateProductTotalCost(product).toFixed(2)} */}
          </div>
          <div className="remove">
            <button
              onClick={() => RemoveFromCart(product.id, Cart, UpdateCart)}
            >
              Remove
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
