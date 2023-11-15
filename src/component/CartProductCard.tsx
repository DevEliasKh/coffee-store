import './CartProductCard.scss';
import {
  RemoveFromCart,
  IncrementProductCount,
  DecrementProductCount,
  GetProductCount,
  CalculateProductTotalCost
} from '../lib/cart';
import { useContext } from 'react';
import useCartContext from '../context/CartContext.ts';
import type { Product } from '../model/product.ts';

interface props {
  product: Product;
}
export default function CartProductCard({ product }: props) {
  const { Cart, UpdateCart } = useContext(useCartContext);
  const id = product.id;
  return (
    <div className="CartCard">
      <img src={product.imageSrc} alt={product.name} />
      <div className="info">
        <div className="name">{product.name}</div>
        <div className="shop-product">
          <div className="btnGroup">
            <button
              onClick={() => DecrementProductCount({ id, Cart, UpdateCart })}
            >
              -
            </button>
            <div className="amount">
              {GetProductCount({ id, Cart, UpdateCart })}
            </div>
            <button
              onClick={() => IncrementProductCount({ id, Cart, UpdateCart })}
            >
              +
            </button>
          </div>
          <div className="price">
            {CalculateProductTotalCost({ id, Cart, UpdateCart })?.toFixed(2)}
          </div>
          <div className="remove">
            <button onClick={() => RemoveFromCart({ id, Cart, UpdateCart })}>
              Remove
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
