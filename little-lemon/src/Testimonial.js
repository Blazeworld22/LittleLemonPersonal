import React from 'react';
import './Testimonial.css';
import user1 from './images/student.jpeg';
import user2 from './images/man.jpeg';
import user3 from './images/woman.jpeg';
import user4 from './images/grandpa.jpeg';

const testimonialsData = [
  { name: "Alice Johnson", username: "@alicej", rating: 5, review: "Amazing food and great service!", image: user1 },
  { name: "Michael Lee", username: "@michaell", rating: 4, review: "Loved the flavors and ambiance!", image: user2 },
  { name: "Sophia Patel", username: "@sophiap", rating: 5, review: "Best Mediterranean food in town!", image: user3 },
  { name: "Daniel Carter", username: "@danielc", rating: 4, review: "Fantastic experience, highly recommended!", image: user4 }
];

function Testimonials() {
  return (
    <section className="testimonials-section">
      <h2 className="testimonials-header">What Our Customers Say</h2>

      {/* Testimonials Cards */}
      <div className="testimonials-container">
        {testimonialsData.map((testimonial, index) => (
          <div key={index} className="testimonial-card">
            {/* Rating (Stars) */}
            <div className="testimonial-rating">
              <p>Rating</p>
              <span className="stars">{"⭐".repeat(testimonial.rating)}</span>
            </div>

            {/* User Image */}
            <div className="testimonial-user">
              <img src={testimonial.image} alt={testimonial.name} className="user-image" />
              <div className="user-info">
                <p className="testimonial-name">{testimonial.name}</p>
                <p className="testimonial-username">{testimonial.username}</p>
              </div>
            </div>

            {/* Review Text */}
            <p className="testimonial-review">"{testimonial.review}"</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
