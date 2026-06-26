import React from 'react';
import BookingList from './BookingList'; // كنجيبو الجدول ديالنا
import Navbar from './Navbar'; // إلا بغيتي الـ Navbar تبقى تبان

function AdminPage() {
  return (
    <div>
      <Navbar />
      <div style={{ padding: '40px', marginTop: '60px' }}>
        <h1 style={{ textAlign: 'center', color: '#333' }}>Admin Dashboard - Bookings List</h1>
        <p style={{ textAlign: 'center', color: '#666' }}>هنا كيبانو ليك كاع الناس اللي حجزوا في الموقع</p>
        <hr />
        {/* كنعرضوا الجدول بوحدو هنا */}
        <BookingList /> 
      </div>
    </div>
  );
}

export default AdminPage;