import './ProductCard.scss';

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
  function clickHandler() {}
  return (
    <div className="card">
      <a href={props.productUrl} className="info">
        <img src={props.product.imageSrc} alt={props.product.name} />
        <div className="name">{props.product.name}</div>
        <div className="price">${props.product.price}</div>
        <p className="description">{props.product.description}</p>
      </a>
      {/* the click event will be passed up to the parent */}
      <button onClick={clickHandler} className="button buy-now">
        <div>Buy Now</div>
      </button>
    </div>
  );
}
