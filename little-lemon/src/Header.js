import React from 'react';
import logo from './images/Asset 14@4x.png';
import './Header.css';
import Nav from './Nav';
function Header() {
  return (
    <header className="site-header">
      <div className="header-container">
        <div className="logo-section">
          <img src={logo} alt="Little Lemon Logo" />
        </div>
        <Nav/>
      </div>
    </header>
  );
}
export default Header;