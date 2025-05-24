import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Homepage from './Components/Homepage';
function App() {
  return (
    <>
    <BrowserRouter>
    <Homepage/>
    </BrowserRouter>
    </>
  );
}
export default App;