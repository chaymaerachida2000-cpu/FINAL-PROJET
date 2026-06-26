import React from 'react';
import './ContactPage.css';

function ContactPage() {
  return (
    <div className="contact-container"style={{ 
           
            backgroundImage: `url('/bckgç.jpg')`,
            
        }}>
      <h1 className="contact-title">Contact Us</h1>
      

      <div className="contact-wrapper">
        
        <div className="contact-info">
          <h3>Get In Touch</h3>
          <p>📍 València, Spain</p>
          <p>📧 info@goldenmar.com</p>
          <p>📞 +34 123 456 789</p>
          <p > <strong>We are here to assist you with any inquiries .</strong></p>
        </div>

       
        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="5" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default ContactPage;