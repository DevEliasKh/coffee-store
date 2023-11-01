import './Store.scss';

import ProductCard from '../component/ProductCard.tsx';

export default function Store() {
  const data = {
    id: '1C',
    name: 'Lucaffé Mamma Lucia',
    imageSrc:
      'https://www.cremashop.eu/media/cache/gallery_image/content/products/lucaffe/mamma-lucia/364-130ce07a4a9cfa784003abfa605256da.jpg',
    price: 22.9,
    description:
      'Lucaffé Mamma Lucia is ideal for morning coffee moments. This sweet coffee works perfectly in milk coffees, such as in your cappuccino and caffè latte. The coffee gives a rich crema.The blend consists of 40 % Arabica and 60 % Robusta beans. For a quick start in the morning!'
  };
  function handleClick() {}
  return (
    <div className="container">
      <div className="btns">
        <button className="btn" onClick={handleClick} value="coffee">
          Coffee
        </button>
        <button className="btn" onClick={handleClick} value="machine">
          Machines
        </button>
        <button className="btn" onClick={handleClick} value="accessory">
          Accessory
        </button>
      </div>
      <div className="cardList">
        <div className="cards">
          <ProductCard product={data} productUrl={'#/'} />
          {/* {#each productList as product}
        <ProductCard {product} onClick={() => addToCart(product)} productUrl="/product/{type}/{product.id}" />
      {/each} */}
        </div>
      </div>
    </div>
  );
}
