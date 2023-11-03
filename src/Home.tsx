import './Home.scss';

import ProductCard from './component/ProductCard';
import productList from '/src/data/products.json';

function Home() {
  return (
    <div className="container">
      <div className="big-image">
        <img src="src/assets/bg.jpg" alt="coffee" />
        <a href="/store">Shop Now!</a>
      </div>

      {productList.map(({ type, list }) => {
        return (
          //   const { type, list } = productList;
          <div className="cardList">
            <button className="button" value={type}>
              {type}
            </button>
            <div className="cards">
              {list.map((product) => {
                return (
                  <ProductCard
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
