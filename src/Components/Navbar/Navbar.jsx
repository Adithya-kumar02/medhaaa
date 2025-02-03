import { useState } from "react";
import "./navbar.css";
import 'boxicons';

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <div className="navParent">
      <nav className="nav">
        <div className="logo">
          <img src="./images/logo.png" alt="Medha Logo" /> {/* Logo */}
          <span className="logo-text">Shree Devi Institute Of Technology</span> {/* Name/Title */}
        </div>

        <div className="menu">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Events</a>
          <a href="#">Contact</a>
          <button className="reg">Register</button>
        </div>

        <div className="mobile">
          <i className="bx bx-menu" onClick={toggleMenu}></i>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="dropdown-menu">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Events</a>
          <a href="#">Contact</a>
          <a href="#">Register</a>
        </div>
      )}
    </div>
  );
};