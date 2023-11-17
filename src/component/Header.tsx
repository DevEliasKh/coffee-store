import '../index.css';
import './header.scss';
import { useContext } from 'react';
import useCartContext from '../context/CartContext.ts';
export default function Header() {
  const { Cart } = useContext(useCartContext);
  return (
    <nav className="navBar">
      <div className="link">
        <a href="/">
          <div>Coffee</div>
        </a>
      </div>
      <div className="links">
        <div className="link">
          <a href="/">Home</a>
        </div>
        <div className="link">
          <a href="/store">Store</a>
        </div>
        <div className="link">
          <a href="/aboutUs">About Us</a>
        </div>
      </div>
      <div className="link">
        <a href="/cart">
          <div className="item">{Cart.length}</div>
          <div>Cart</div>
        </a>
      </div>
    </nav>
  );
}
