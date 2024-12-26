import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/global.css";
import LoginPopup from "../pages/Login";

function Navbar() {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <nav className="navbar">
      <div className="logo">{'{'}Finsweet{'}'}</div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/services">Service</Link></li>
        <li><Link to="/company">Company</Link></li>
        <li><Link to="/contact">Contact Us</Link></li>
        <li>
          <button className="login-button" onClick={togglePopup}>
            Log in
          </button>
        </li>
      </ul>
      {showPopup && <LoginPopup onClose={togglePopup} />}
    </nav>
  );
}

export default Navbar;
