import React from 'react';
import logo from '../images/Asset 16@4x.png';
import './Header.css';
import Nav from './Nav';
import { Link } from 'react-router-dom';
function Header() {
  return (
    <header className="site-header">
      <div className="header-container">
        <div className="logo-section">
          <Link to="/">
            <img src={logo} alt="Little Lemon Logo" />
          </Link>
        </div>
        <Nav isFooter={false}/>
      </div>
    </header>
  );
}
export default Header;