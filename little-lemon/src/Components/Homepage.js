import React,{useReducer} from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import BookingPage from './BookingPage';
import About from './About';
//reducer and initializer for availableTimes
function updateTimes(state, action) {
  switch (action.type) {
    case 'UPDATE_TIMES':
      return ['17:00', '17:30', '18:00', '18:30', '19:00', '19:30', '20:00'];
    default:
      return state;
  }
}
function initializeTimes() {
  return ['17:00', '17:30', '18:00', '18:30', '19:00', '19:30', '20:00'];
}

function Homepage() {
  // Lift booking-related state up here using useReducer
  const [availableTimes, dispatch] = useReducer(updateTimes, undefined, initializeTimes);
  return (
    <>
    <Header />
    <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/booking" element={<BookingPage availableTimes={availableTimes} dispatch={dispatch} />} />
        <Route path="/about" element={<About />} />
      </Routes>
    <Footer />
    </>
  );
}
export default Homepage;