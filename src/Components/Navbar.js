import React, { useState } from 'react';
import './Navbar.css'; // You can create a separate CSS file for styling

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className={`navbar-links-brandname ${isOpen ? 'active' : ''}`}><a href="/" onClick={toggleNavbar}>
        ShopSmart
      </a></div>

      <button className="navbar-toggle" onClick={toggleNavbar}>
        Menu
      </button>

      <div className={`navbar-links ${isOpen ? 'active' : ''}`}>
        <a href="shop" onClick={toggleNavbar}>
          Shop
        </a>
        <a href="#blog" onClick={toggleNavbar}>
          Blog
        </a>
        <a href="#contact" onClick={toggleNavbar}>
          Contact Us
        </a>
        <a href="#cart" onClick={toggleNavbar}>
          Cart
        </a>
        <a href="signup" onClick={toggleNavbar}>
          Sign Up
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
