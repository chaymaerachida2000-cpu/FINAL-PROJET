import React, { useState } from 'react';
import axios from 'axios';
import './BookingForm.css';

// لاحظي زدت props هنا
function BookingForm({ onMessage }) { 
  const [formData, setFormData] = useState({ clientName: '', service: '', date: '', time: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5001/add-booking', formData);
      
      // في بلاصة alert، كنعيطو لهاد الدالة
      onMessage("✅ Booking added successfully!");
      
      setFormData({ clientName: '', service: '', date: '', time: '' }); 
    } catch (err) {
      // وحتى في حالة الخطأ
      onMessage("❌ Error: " + err.message);
    }
  };

  return (
    <form className="booking-form" onSubmit={handleSubmit}>
      <h2>Book your service</h2>
      {/* ... باقي الـ inputs ديالك كيفما هما ... */}
      <input name="clientName" placeholder="Client Name" value={formData.clientName} onChange={handleChange} required />
      <input name="service" placeholder="Service" value={formData.service} onChange={handleChange} required />
      <input type="date" name="date" value={formData.date} onChange={handleChange} required />
      <input type="time" name="time" value={formData.time} onChange={handleChange} required />
      
      <button type="submit">Submit Booking</button>
    </form>
  );
}

export default BookingForm;