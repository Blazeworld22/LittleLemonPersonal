import React, { useState } from 'react';
import './BookingForm.css';

function BookingForm({ availableTimes, dispatch, submitForm }) {
  // Create state for the form fields
  const [formData, setFormData] = useState({
    date: '',
    time: '', // This field will be selected from availableTimes
    occasion: 'Birthday',
    partySize: 1, // Default party size set to 1
  });

  // Handle input changes for controlled components
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'date') {
      // Dispatch an action to update available times based on the new date.
      dispatch({ type: 'UPDATE_TIMES', date: value });
    }

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    submitForm(formData);
  };

  return (
    <div className="booking-page">
      <div className="booking-card">
        <h1>Reserve a Table</h1>
        <p>
          Book your table at Little Lemon and enjoy a wonderful dining experience.
        </p>
        
        <form className="booking-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="date">Date:</label>
            <input
              type="date"
              id="date"
              name="date"
              required
              value={formData.date}
              onChange={handleChange}
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="time">Time:</label>
            {/* Use a <select> element to display available times from availableTimes state */}
            <select
              id="time"
              name="time"
              required
              value={formData.time}
              onChange={handleChange}
            >
              <option value="" disabled>Select Time</option>
              {availableTimes.map((time, index) => (
                <option key={index} value={time}>
                  {time}
                </option>
              ))}
            </select>
          </div>
          
          <div className="form-group">
            <label htmlFor="occasion">Occasion:</label>
            <select
              id="occasion"
              name="occasion"
              required
              value={formData.occasion}
              onChange={handleChange}
            >
              <option value="Birthday">Birthday</option>
              <option value="Anniversary">Anniversary</option>
              <option value="Engagement">Engagement</option>
              <option value="Other">Other</option>
            </select>
          </div>
          
          <div className="form-group">
            <label htmlFor="partySize">Party Size:</label>
            <input
              type="number"
              id="partySize"
              name="partySize"
              min="1"
              max="10"
              required
              value={formData.partySize}
              onChange={handleChange}
            />
          </div>
          
          <button type="submit">Reserve Now</button>
        </form>
      </div>
    </div>
  );
}

export default BookingForm;
