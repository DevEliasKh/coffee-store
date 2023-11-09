import { useParams } from 'react-router-dom';
import productList from '../data/products.json';
import './Product.scss';

const AllProduct = productList.flatMap((group) => group.list);
export default function ProductPage() {
  const { id } = useParams();
  const product = AllProduct.find((Element) => Element.id === id);
  function clickHandler() {}
  if (product) {
    return (
      <div className="containerProduct">
        <div className="img">
          <img src={product.imageSrc} alt={product.name} />
        </div>
        <div className="info">
          <div className="title">{product.name}</div>
          <div className="description">{product.description}</div>
          <div className="buyItem">
            <div className="price">${product.price}</div>
            <button onClick={clickHandler}> Add to cart </button>
          </div>
        </div>
      </div>
    );
  }
}
