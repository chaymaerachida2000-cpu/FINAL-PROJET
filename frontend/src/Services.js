import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Services.css';

const Services = () => {
    const navigate = useNavigate();

    // دالة الانتقال لصفحة الحجز مع تمرير الباكاج والثمن
    const handleBooking = (packageName, price) => {
        navigate('/booking', { state: { selectedPackage: packageName, price: price } });
    };

    return (
    <section className="services-section" style={{ backgroundImage: `url('/playa3.png')` }}>npm install leaflet react-leaflet
            <h2 className="title">OUR PACKAGES</h2>
            <p className="subtitle">Choose the luxury experience that fits your perfect beach day</p>
            
            <div className="services-grid">
                
                {/* 1. STANDARD */}
                <div className="service-card">
                    <div className="card-info">
                        <h3>STANDARD</h3>
                        <p className="price">10€ / hour</p>
                        <p>Perfect for a relaxing day under the sun with premium comfort.</p>
                        <ul>
                            <li>✔ Beach Chair</li>
                            <li>✔ Parasol</li>
                            <li>✔ Side Table</li>
                        </ul>
                        <button className="btn" onClick={() => handleBooking('Standard', '10€')}>BOOK NOW</button>
                    </div>
                    <div className="card-media"><img src="/playa5.jpg" alt="Standard" /></div>
                </div>

                {/* 2. PREMIUM */}
                <div className="service-card reverse">
                    <div className="card-info">
                        <h3>PREMIUM</h3>
                        <p className="price">30€ / hour</p>
                        <p>The ultimate experience: 24/7 service and exclusive amenities.</p>
                        <ul>
                            <li>✔ 24/7 Dedicated Service</li>
                            <li>✔ Seafood & Cocktail Menu</li>
                        </ul>
                        <button className="btn" onClick={() => handleBooking('Premium', '30€')}>BOOK NOW</button>
                    </div>
                    <div className="card-media"><img src="/playa4.jpg" alt="Premium" /></div>
                </div>

                {/* 3. SUNSET LOUNGE */}
                <div className="service-card">
                    <div className="card-info">
                        <h3>SUNSET LOUNGE</h3>
                        <p className="price">40€ / session</p>
                        <p>Experience the magical Valencia sunset with our exclusive lounge set-up.</p>
                        <button className="btn" onClick={() => handleBooking('Sunset Lounge', '40€')}>BOOK NOW</button>
                    </div>
                    <div className="card-media"><img src="/playa7.jpg" alt="Sunset Lounge" /></div>
                </div>

                {/* 4. FAMILY ZONE */}
                <div className="service-card reverse">
                    <div className="card-info">
                        <h3>FAMILY ZONE</h3>
                        <p className="price">60€ / hour</p>
                        <p>Spacious area designed for the whole family to enjoy together.</p>
                        <button className="btn" onClick={() => handleBooking('Family Zone', '60€')}>BOOK NOW</button>
                    </div>
                    <div className="card-media"><img src="/playa6.jpg" alt="Family Zone" /></div>
                </div>

            </div>
        </section>
    );
};

export default Services;