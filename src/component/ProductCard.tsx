import './ProductCard.scss';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import useCartContext from '/src/context/CartContext.ts';

interface Product {
  id: string;
  name: string;
  imageSrc: string;
  price: number;
  description: string;
}

interface Props {
  product: Product;
  productUrl: string;
}

export default function ProductCard(props: Props) {
  const { cart, UpdateCart } = useContext(useCartContext);
  const id = props.product.id;
  //   console.log(cart, id);
  function clickHandler() {
    UpdateCart([...cart, id]);
  }
  return (
    <div className="card" key={props.product.id}>
      <Link to={props.productUrl} className="info">
        <img src={props.product.imageSrc} alt={props.product.name} />
        <div className="name">{props.product.name}</div>
        <div className="price">${props.product.price}</div>
        <p className="description">{props.product.description}</p>
      </Link>
      {/* the click event will be passed up to the parent */}
      <button
        onClick={() => {
          clickHandler();
        }}
        className="button buy-now"
      >
        <div>Buy Now</div>
      </button>
    </div>
  );
}
