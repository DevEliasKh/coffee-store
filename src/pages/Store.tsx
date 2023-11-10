import './Store.scss';
import { useState } from 'react';
import ProductCard from '../component/ProductCard.tsx';
import productList from '../data/products.json';
import type { Product, ProductGroup } from '../model/product.ts';

export default function Store() {
  const [type, setType] = useState('Coffee');
  function handleClick(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    setType(e.currentTarget.value);
  }

  const products = productList.filter((p: ProductGroup) => p.type == type)[0]
    .list;
  console.log(products);
  return (
    <div className="Store">
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
          {products.map((product: Product) => (
            <ProductCard
              key={product.id}
              product={product}
              productUrl={`/${type}/${product.id}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
