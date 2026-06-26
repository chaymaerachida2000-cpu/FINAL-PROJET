import React from 'react';
import './ConfirmationPage.css'; // تأكدي أن عندك ملف CSS خاص بهاد الصفحة

function ConfirmationPage() {
  return (
    <div className="confirmation-container"style={{ 
           
            backgroundImage: `url('/welcamm.png')`,
            
        }}>
      
    
      
      {/* هاد السطر هو اللي خدام حيتاش التصويرة فـ public */}
      <img src="/framii2.png" alt="Booking QR Code" style={{ width: '250px', border: '5px solid #d4af37' }} />

      
      <button onClick={() => window.location.href = '/'}>Back to Home</button>
    </div>
  );
}

export default ConfirmationPage;