import React from 'react';
import Nav from './Nav'
import './Footer.css';
import logo from '../images/Asset 20@4x.png';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer-container">
      {/* Left: Logo */}
      <div className="footer-logo">
        <Link to="/">
        <img src={logo} alt="Little Lemon Logo" />
        </Link>
      </div>

      {/* Middle: Navigation */}
      <div className="footer-nav">
        <h3>Navigation</h3>
        <Nav isFooter={true}/>
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
