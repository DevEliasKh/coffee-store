export default function CartProductStore(props) {
  const product = props;
  return (
    <div className="CartCard">
      <img src={product.imageSrc} alt="" />
      <div className="info">
        <div className="name">{product.name}</div>
        <div className="shop-product">
          <div className="btnGroup">
            <button onClick={() => decrementProductCount(product)}></button>
            <div className="amount">{getProductCount(product)}</div>
            <button onClick={() => incrementProductCount(product)}></button>
          </div>
          <div className="price">
            {calculateProductTotalCost(product).toFixed(2)}
          </div>
          <div className="remove">
            <button onClick={() => removeFromCart(product)}>Remove</button>
          </div>
        </div>
      </div>
    </div>
  );
}
