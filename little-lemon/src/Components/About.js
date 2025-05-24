import React from 'react';
import './About.css';
import Testimonial from './Testimonial';
import image1 from '../images/salmon.jpeg'; // First image
import image2 from '../images/c1bff.jpg'; // Second image

function About() {
  return (
    <>
    <section className="about-section">
      {/* Left Content */}
      <div className="about-text">
        <h2 className="about-title">Little Lemon</h2>
        <h3 className="about-location">Chicago</h3>
        <p className="about-description">
          Little Lemon’s journey began with a simple yet ambitious dream—to bring the vibrant flavors and warm hospitality of the Mediterranean to the heart of Chicago. Founded by two lifelong friends who grew up savoring the rich culinary traditions of their coastal hometown, Little Lemon is more than just a restaurant—it’s a tribute to the authentic, time-honored recipes passed down through generations.

What started as a humble kitchen experiment soon turned into a mission: to create dishes that reflect the soul of the Mediterranean, using only the freshest, highest-quality ingredients. From hand-selected olives to sun-ripened tomatoes, every element in our kitchen tells a story of heritage, craftsmanship, and passion.

The name Little Lemon embodies the spirit of Mediterranean cuisine—simple, fresh, and full of zest. Just like the small yet essential citrus fruit, our menu is designed to bring brightness and balance to every dish, whether it's a tender grilled seafood platter, aromatic saffron-infused rice, or a perfectly crafted mezze spread.

Our restaurant serves as a welcoming escape from the busy streets of Chicago, where guests can unwind and enjoy a meal that transports them straight to a seaside taverna. With an ambiance inspired by the rustic charm of Mediterranean villages, every detail—from the soft golden lighting to the warm, earthy decor—aims to capture the feeling of gathering around a family table.

At Little Lemon, we don’t just serve food; we serve memories. We invite diners to experience the joy of Mediterranean dining, where every bite carries the essence of tradition, and every visit feels like home. 🌿🍋✨

Would you like to refine or add more personal touches to this story? I'm happy to tweak it to match your vision! 🚀😊
        </p>
      </div>

      {/* Right Images */}
      <div className="about-images">
        <img src={image1} alt="Restaurant Interior" className="about-img about-img-low" />
        <img src={image2} alt="Dining Area" className="about-img about-img-high" />
      </div>
    </section>
    <section>
      <Testimonial/>
    </section>
    </>
  );
}

export default About;
