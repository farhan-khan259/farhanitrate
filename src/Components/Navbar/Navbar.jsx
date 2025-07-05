import { Link } from "react-router-dom";
import logo from "../../Assets/pictures/farhanitratelogo.png";
import { useState } from "react";
import "./Navbar.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className="navbarmain">
        <img className="logo" src={logo} alt="logo" />
        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </div>
        <ul className={`navlinks ${menuOpen ? "open" : ""}`}>
          <li>
            <Link to="/" onClick={() => setMenuOpen(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/AboutUs" onClick={() => setMenuOpen(false)}>
              About Us
            </Link>
          </li>
          <li>
            <Link to="/PrivacyPolicy" onClick={() => setMenuOpen(false)}>
              Privacy Policy
            </Link>
          </li>
          <li>
            <Link to="/ContactUs" onClick={() => setMenuOpen(false)}>
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
