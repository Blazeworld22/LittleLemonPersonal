import React,{useReducer,useState,useEffect} from 'react';
import { Routes, Route,useNavigate } from 'react-router-dom';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import BookingPage from './BookingPage';
import About from './About';
import ConfirmedBooking from './ConfirmedBooking';

// Helper function that loads the remote API code only once.
function loadRemoteAPI() {
  return fetch("https://raw.githubusercontent.com/courseraap/capstone/main/api.js")
    .then(response => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.text();
    })
    .then(code => {
      // Check if the script has already been injected.
      if (document.getElementById("remote-api")) {
        return;
      }
      const script = document.createElement("script");
      script.setAttribute("id", "remote-api");
      // Wrap the remote code in an IIFE that checks a flag before executing.
      script.textContent = `
        (function(){
          if(!window.__remoteAPILoaded__){
            window.__remoteAPILoaded__ = true;
            ${code}
            window.fetchAPI = fetchAPI;
            window.submitAPI = submitAPI;
          }
        })();
      `;
      document.head.appendChild(script);
    })
    .catch(error => {
      console.error("Error loading remote API:", error);
    });
}
//reducer and initializer for availableTimes
function updateTimes(state, action) {
  switch (action.type) {
    case 'UPDATE_TIMES':
return typeof window.fetchAPI === 'function'
        ? window.fetchAPI(new Date(action.date))
        : state;
    default:
      return state;
  }
}
function initializeTimes() {
  const today = new Date();
return typeof window.fetchAPI === 'function'
    ? window.fetchAPI(today)
    : ['17:00', '17:30', '18:00', '18:30', '19:00', '19:30', '20:00'];
}

function Homepage() {
// Local state to keep track of whether the remote API has loaded.
  const [apiLoaded, setApiLoaded] = useState(false);

  // Lift booking-related state up here using useReducer
  const [availableTimes, dispatch] = useReducer(updateTimes, undefined, initializeTimes);
  const navigate = useNavigate();
  
  useEffect(() => {
    // Only load the remote API if not already loaded.
    if (typeof window.fetchAPI !== 'function' || typeof window.submitAPI !== 'function') {
      loadRemoteAPI().then(() => {
        setApiLoaded(true);
      });
    } else {
      setApiLoaded(true);
    }
  }, []);

// Define the submitForm function.
  const submitForm = (formData) => {
    // Call the API function; if it returns true, navigate to confirmation.
    if (typeof window.submitAPI === 'function' && window.submitAPI(formData)) {
      navigate('/confirmed', { state: formData });
    } else {
      alert('Booking submission failed. Please try again.');
    }
  };

  // Optionally, show a loading indicator while waiting for the remote API.
  if (!apiLoaded) {
    return <div>Loading booking system...</div>;
  }
  return (
    <>
    <Header />
    <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/booking" element={<BookingPage availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm} />} />
        <Route path="/about" element={<About />} />
        <Route path="/confirmed" element={<ConfirmedBooking />} />
      </Routes>
    <Footer />
    </>
  );
}
export default Homepage;