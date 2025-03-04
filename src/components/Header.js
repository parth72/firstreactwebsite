import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'; // Ensure the logo is placed inside src/assets/

function Header() {
  return (
    <header className="header">
      <Link to="/">
        <img src={logo} alt="Ghost Studios Logo" className="logo" />
      </Link>
      <nav>
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/about" className="nav-link">About</Link>
      </nav>
    </header>
  );
}

export default Header;
