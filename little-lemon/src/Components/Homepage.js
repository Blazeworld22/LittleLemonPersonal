import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import BookingPage from './BookingPage';
import About from './About';
function Homepage() {
  return (
    <>
    <Header />
    <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/booking" element={<BookingPage />} />
        <Route path="/about" element={<About />} />
      </Routes>
    <Footer />
    </>
  );
}
export default Homepage;