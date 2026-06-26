import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom'; // زدنا useNavigate
import BookingForm from './BookingForm';
import './BookingPage.css';

function BookingPage() {
  const [statusMessage, setStatusMessage] = useState("");
  const location = useLocation();
  const navigate = useNavigate(); // باش نحولو الكليان لصفحة التأكيد
  const selectedBeach = location.state?.location;

  // هادي دالة عادية للميساجات
  const handleMessage = (msg) => {
    setStatusMessage(msg);
    setTimeout(() => setStatusMessage(""), 3000);
  };

  // هادي دالة خاصة بالنجاح اللي غتحول الكليان
  const handleSuccess = (msg) => {
    setStatusMessage(msg);
    // تأخير صغير باش يشوفو الميساج قبل ما يتحولو
    setTimeout(() => {
      navigate('/confirmation');
    }, 1500);
  };

  return (
    <div className="container" style={{ backgroundImage: `url('/playaplan3.jpg')` }}>
      {statusMessage && <div className="status-banner">{statusMessage}</div>}

      <h1 className="main-title">Reservation</h1>

      {selectedBeach && (
        <h2 style={{ textAlign: 'center', color: '#1f61ad', marginBottom: '20px' }}>
          Booking for: {selectedBeach}
        </h2>
      )}
      
      <div className="form-wrapper">
        {/* هنا كنعيطو لـ handleSuccess */}
        <BookingForm onMessage={handleSuccess} selectedBeach={selectedBeach} />
      </div>
    </div>
  );
}

export default BookingPage;