import React from 'react';
import './BookingPage.css';

function BookingPage() {
  return (
    <div className="booking-page">
      <div className="booking-card">
        <h1>Reserve a Table</h1>
        <p>
          Book your table at Little Lemon and enjoy a wonderful dining experience.
        </p>
        
        <form className="booking-form">
          <div className="form-group">
            <label htmlFor="date">Date:</label>
            <input type="date" id="date" name="date" required />
          </div>
          <div className="form-group">
            <label htmlFor="time">Time:</label>
            <input type="time" id="time" name="time" required />
          </div>
          <div className="form-group">
            <label htmlFor="partySize">Party Size:</label>
            <input type="number" id="partySize" name="partySize" min="1" max="10" required />
          </div>
          <button type="submit">Reserve Now</button>
        </form>
      </div>
    </div>
  );
}

export default BookingPage;
