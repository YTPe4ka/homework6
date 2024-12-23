import React from "react";
import { Link } from "react-router-dom";
import "../styles/global.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">{'{'}Finsweet{'}'}</div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/services">Service</Link></li>
        <li><Link to="/company">Company</Link></li>
        <li><Link to="/contact">Contact Us</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
