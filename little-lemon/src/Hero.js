import React from 'react';
import './Hero.css';  // Import the CSS for styling
import restaurantImage from './images/mediterranean-cuisine-ANG.png'; // Update path based on your project structure

function Hero() {
  return (
    <section className="hero-container">
      {/* Left section: Text content */}
      <div className="hero-text">
        <h1 className="hero-title">Little Lemon</h1>
        <h2 className="hero-location">Chicago, IL</h2>
        <p className="hero-description">
          Experience authentic Mediterranean flavors at Little Lemon.
          From fresh ingredients to expertly crafted dishes, we bring you 
          a taste of the Mediterranean right in the heart of Chicago.
        </p>
        <button className="hero-button">Reserve a Table</button>
      </div>

      {/* Right section: Restaurant image */}
      <div className="hero-image">
        <img src={restaurantImage} alt="Little Lemon Restaurant" />
      </div>
    </section>
  );
}

export default Hero;