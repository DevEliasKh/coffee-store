import './Home.scss';

import ProductCard from './component/ProductCard';
import productList from './data/products.json';
import type { Product, ProductGroup } from './model/product.ts';

function Home() {
  return (
    <div className="container">
      <div className="big-image">
        <img src="./assets/bg.jpg" alt="coffee" />
        <a href="/store">Shop Now!</a>
      </div>

      {productList.map(({ type, list }: ProductGroup) => {
        return (
          //   const { type, list } = productList;
          <div className="cardList" key={type}>
            <button className="button" value={type}>
              {type}
            </button>
            <div className="cards">
              {list.map((product: Product) => {
                return (
                  <ProductCard
                    key={product.id}
                    product={product}
                    productUrl={`/${type}/${product.id}`}
                  />
                );
              })}
            </div>
            <button className="showMoreBtn button">
              <a href="/store">Show More {'>>'}</a>
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default Home;
