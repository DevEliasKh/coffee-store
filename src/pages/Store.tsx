import './Store.scss';
import { useState } from 'react';
import ProductCard from '../component/ProductCard.tsx';
import productList from '/src/data/products.json';

export default function Store() {
  const [type, setType] = useState('Coffee');
  function handleClick(e) {
    setType(e.target.value);
  }

  const products = productList.filter((p: string) => p.type == type)[0].list;
  console.log(products);
  return (
    <div className="container">
      <div className="btns">
        <button className="btn" onClick={handleClick} value="Coffee">
          Coffee
        </button>
        <button className="btn" onClick={handleClick} value="Machine">
          Machines
        </button>
        <button className="btn" onClick={handleClick} value="Accessory">
          Accessory
        </button>
      </div>
      <div className="cardList">
        <div className="cards">
          {products.map((product) => (
            <ProductCard product={product} productUrl={'/#'} />
          ))}
        </div>
      </div>
    </div>
  );
}
