import React from 'react';
import './Footer.css';
import logo from './images/Asset 20@4x.png';

function Footer() {
  return (
    <footer className="footer-container">
      {/* Left: Logo */}
      <div className="footer-logo">
        <img src={logo} alt="Little Lemon Logo" />
      </div>

      {/* Middle: Navigation */}
      <div className="footer-nav">
        <h3>Navigation</h3>
        <ul className="footer-links">
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/menu">Menu</a></li>
          <li><a href="/reservations">Reservations</a></li>
          <li><a href="/order-online">Order Online</a></li>
          <li><a href="/login">Login</a></li>
        </ul>
      </div>

      {/* Next Section: Contact Info */}
      <div className="footer-contact">
        <h3>Contact</h3>
        <p>123 Mediterranean St, Chicago, IL</p>
        <p>+1 (555) 123-4567</p>
        <p>contact@littlelemon.com</p>
      </div>

      {/* Right Section: Social Media */}
      <div className="footer-social">
        <h3>Follow Us</h3>
        <ul className="social-links">
          <li><a href="www.facebook.com">Facebook</a></li>
          <li><a href="www.instagram.com">Instagram</a></li>
          <li><a href="www.twitter.com">Twitter</a></li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
