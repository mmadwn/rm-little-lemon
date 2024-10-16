import { Link } from 'react-router-dom';
import logo from '../assets/Logo.svg';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div>
          <img src={logo} alt="Little Lemon logo" className="footer-logo" />
          <p>&copy; 2023 Little Lemon Restaurant. All rights reserved.</p>
        </div>
        <div className="footer-nav">
          <h3>Navigation</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/menu">Menu</Link></li>
            <li><Link to="/reservations">Reservations</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h3>Contact Us</h3>
          <p>123 Main Street, Chicago</p>
          <p>Phone: (123) 456-7890</p>
          <p>Email: info@littlelemon.com</p>
        </div>
        <div>
          <h3>Follow Us</h3>
          <p>Facebook</p>
          <p>Instagram</p>
          <p>Twitter</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
