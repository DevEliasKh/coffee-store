import '../index.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-link">
        <div className="link">
          <a href="home">Home</a>
        </div>
        <div className="link">
          <a href="store">Store</a>
        </div>
        <div className="link">
          <a href="aboutUs">About Us</a>
        </div>
      </div>
      <div className="link">
        <a href="home">
          <div>Coffee</div>
        </a>
      </div>
    </footer>
  );
}
