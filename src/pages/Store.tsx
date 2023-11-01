import './Store.scss';

export default function Store() {
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
          {/* {#each productList as product}
        <ProductCard {product} onClick={() => addToCart(product)} productUrl="/product/{type}/{product.id}" />
      {/each} */}
        </div>
      </div>
    </div>
  );
}
