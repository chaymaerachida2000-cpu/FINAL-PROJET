import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar'; 
import BookingPage from './BookingPage'; 
import Hero from './Hero'; 
import Services from './Services'; 
import LocationsPage from './LocationsPage';
import ContactPage from './ContactPage';
import ConfirmationPage from './ConfirmationPage';

function App() {
  return (
    <Router>
      <Navbar /> 
      <div className="content">
        <Routes>
          <Route path="/" element={<Hero />} /> 
          <Route path="/home" element={<Hero />} />
          <Route path="/booking" element={<BookingPage />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/confirmation" element={<ConfirmationPage />} />
          
          <Route path="/locations" element={<LocationsPage />} /> 
        </Routes>
      </div>
    </Router>
  );
}

export default App;