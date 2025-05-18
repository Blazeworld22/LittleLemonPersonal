import React from 'react';
import './Specials.css';
import dish1 from './images/7aeb50.jpg';
import dish2 from './images/a76e.jpg';
import dish3 from './images/medsalad.jpeg';
import deliveryLogo from './images/delivery.jpg'; // Delivery logo

function Specials() {
  const specialsData = [
    { image: dish1, name: "Grilled Salmon", price: "$15.99", description: "Freshly grilled salmon with lemon butter sauce." },
    { image: dish2, name: "Pasta Primavera", price: "$12.99", description: "Classic Italian pasta with fresh vegetables." },
    { image: dish3, name: "Mediterranean Salad", price: "$10.99", description: "A fresh mix of greens, feta cheese, and olives." }
  ];

  return (
    <section className="specials-section">
      {/* Header & Online Menu Button */}
      <div className="specials-header">
        <h2>Specials</h2>
        <button className="menu-button">View Online Menu</button>
      </div>

      {/* Specials Cards */}
      <div className="specials-container">
        {specialsData.map((item, index) => (
          <div key={index} className="special-card">
            <img src={item.image} alt={item.name} className="dish-image" />
            <div className="special-card-content">
              <div className="special-card-header">
                <h3 className="dish-name">{item.name}</h3>
                <span className="dish-price">{item.price}</span>
              </div>
              <p className="dish-description">{item.description}</p>
              <button className="order-button">
                <img src={deliveryLogo} alt="Delivery Logo" className="delivery-icon" /> Order for Delivery
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Specials;
