import '../index.css';
import './header.scss';
export default function Header() {
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
          <div className="item">2{/* {$cartProductStore.size} */}</div>
          <div>Cart</div>
        </a>
      </div>
    </nav>
  );
}
