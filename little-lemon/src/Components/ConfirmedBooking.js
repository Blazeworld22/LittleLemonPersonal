import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './ConfirmedBooking.css';

function ConfirmedBooking() {
  const navigate = useNavigate();
  const location = useLocation();
  
  // Retrieve the form data that was passed when navigating to this route.
  // If no state is found, we provide default fallback values.
  const {
    date = 'N/A',
    time = 'N/A',
    occasion = 'N/A',
    partySize = 'N/A',
  } = location.state || {};

  // Optionally generate a random confirmation number if not provided by the API.
  const confirmationNumber = Math.floor(Math.random() * 1000000);
  
  return (
    <div className="confirmed-booking-container">
      <div className="confirmed-booking-card">
        <h2>Booking Confirmed!</h2>
        <p>Your reservation has been successfully booked. We're excited to have you with us!</p>
        <div className="booking-details">
          <p><strong>Confirmation Number:</strong> #{confirmationNumber}</p>
          <p><strong>Date:</strong> {date}</p>
          <p><strong>Time:</strong> {time}</p>
          <p><strong>Occasion:</strong> {occasion}</p>
          <p><strong>Party Size:</strong> {partySize}</p>
        </div>
        <button className="back-home-btn" onClick={() => navigate('/')}>
          Back to Home
        </button>
      </div>
    </div>
  );
}

export default ConfirmedBooking;