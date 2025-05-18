import React from 'react';
import './About.css';
import image1 from './images/salmon.jpeg'; // First image
import image2 from './images/c1bff.jpg'; // Second image

function About() {
  return (
    <section className="about-section">
      {/* Left Content */}
      <div className="about-text">
        <h2 className="about-title">Little Lemon</h2>
        <h3 className="about-location">Chicago</h3>
        <p className="about-description">
          Little Lemon brings the authentic Mediterranean dining experience to Chicago.
          Our recipes are crafted with fresh, high-quality ingredients to deliver
          a taste that transports you straight to the Mediterranean coast.
        </p>
      </div>

      {/* Right Images */}
      <div className="about-images">
        <img src={image1} alt="Restaurant Interior" className="about-img about-img-low" />
        <img src={image2} alt="Dining Area" className="about-img about-img-high" />
      </div>
    </section>
  );
}

export default About;
