interface Product {
  id: string;
  name: string;
  imageSrc: string;
  price: number;
  description: string;
}

export default function ProductCard(product: Product, productUrl: string) {
  function clickHandler() {}
  return (
    <div className="card">
      <a href={productUrl} className="info">
        <img src={product.imageSrc} alt={product.name} />
        <div className="name">{product.name}</div>
        <div className="price">${product.price}</div>
        <p className="description">{product.description}</p>
      </a>
      {/* the click event will be passed up to the parent */}
      <button onClick={clickHandler} className="button buy-now">
        <div>Buy Now</div>
      </button>
    </div>
  );
}
