import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './BookingList.css'; // غنصايبو ليه الستايل ديالو من بعد

function BookingsList() {
  const [bookings, setBookings] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  // كنجبدو الداتا من السيرفر
  useEffect(() => {
    axios.get('http://localhost:5001/bookings')
      .then(res => setBookings(res.data))
      .catch(err => console.log(err));
  }, []);

  // هاد الدالة هي اللي كدير البحث (فلترة)
  const filteredBookings = bookings.filter((b) =>
    b.clientName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bookings-container">
      <h2>Existing Bookings</h2>
      <input 
        type="text" 
        placeholder="Search by client name..." 
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input"
      />
      
      <table className="bookings-table">
        <thead>
          <tr>
            <th>Client Name</th>
            <th>Service</th>
            <th>Date</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          {filteredBookings.map((b, index) => (
            <tr key={index}>
              <td>{b.clientName}</td>
              <td>{b.service}</td>
              <td>{b.date}</td>
              <td>{b.time}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default BookingsList;