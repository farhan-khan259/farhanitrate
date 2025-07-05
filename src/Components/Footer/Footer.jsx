import { Link } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-contact">
        <h3>Contact Info</h3>
        <p>Email: itsfarhan259@gmail.com</p>
        <p>Phone: +92 3340490934</p>
        <p>Address: Kohat, Pakistan</p>
      </div>

      <div className="footer-links">
        <h3>Quick Links</h3>
        <ul>
          <li>
            <Link to="/" className="footer-link">
              Home
            </Link>
          </li>
          <li>
            <Link to="/AboutUs" className="footer-link">
              About Us
            </Link>
          </li>
          <li>
            <Link to="/ContactUs" className="footer-link">
              Contact Us
            </Link>
          </li>
          <li>
            <Link to="/PrivacyPolicy" className="footer-link">
              Privacy Policy
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}
