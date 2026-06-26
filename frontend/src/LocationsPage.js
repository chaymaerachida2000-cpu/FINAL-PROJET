/* global L */
import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom'; // 1. الـ Import الصحيح
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import './Locations.css';

import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41]
});
L.Marker.prototype.options.icon = DefaultIcon;

const LocationsPage = () => {
    const mapRef = useRef(null);
    const navigate = useNavigate(); // 2. تعريف الـ hook هنا

    const beachLocations = [
        { name: "Golden Mar - Malvarrosa", coords: [39.4678, -0.3289] },
        { name: "Golden Mar - Patacona", coords: [39.4795, -0.3225] },
        { name: "Golden Mar - El Saler", coords: [39.3850, -0.3340] }
    ];

    useEffect(() => {
        if (mapRef.current) return;
        const map = L.map('map').setView([39.43, -0.33], 12);
        mapRef.current = map;
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

        beachLocations.forEach((loc) => {
            L.marker(loc.coords).addTo(map).bindPopup(`<b>${loc.name}</b>`);
        });

        return () => { map.remove(); mapRef.current = null; };
    }, []);

    return (
        <div className="locations-section" style={{ 
           
            backgroundImage: `url('/playa98.jpg')`,
            
        }}>
            <h2 style={{ textAlign: 'center' }}>Our Locations</h2>
            
            <div id="map" style={{ height: '500px', width: '100%', borderRadius: '15px', marginBottom: '30px' }}></div>
            
            <div className="locations-list" style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', justifyContent: 'center' }}>
                {beachLocations.map((loc, index) => (
                    <div key={index} className="location-card" style={{ border: '2px solid #D4AF37', padding: '20px', borderRadius: '12px', width: '280px', textAlign: 'center', backgroundColor: 'rgba(255,255,255,0.8)' }}>
                        <h3>{loc.name}</h3>
                        <button className="book-btn" onClick={() => navigate('/booking', { state: { location: loc.name } })}>
                            Book Now
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default LocationsPage;