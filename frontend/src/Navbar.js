import React, { useState } from 'react'; // زيدي useState هنا
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false); // الحالة باش نعرفو واش المنيو مفتوح

    return (
        <nav className="navbar">
            {/* زر الهامبرغر - غادي يبان غير فالتليفون */}
            <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? '✕' : '☰'}
            </div>

            {/* ضفنا كلاس active باش يتحكم فيه الـ CSS */}
            <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
                <li><Link to="/home" onClick={() => setIsOpen(false)}>HOME</Link></li>
                <li><Link to="/services" onClick={() => setIsOpen(false)}>SERVICES</Link></li>
           
                <li><Link to="/locations"onClick={() => setIsOpen(false)}>LOCATIONS</Link></li>
                <li><Link to="/contact" onClick={() => setIsOpen(false)}>CONTACT</Link></li>
            </ul>

            <button className="btn-book" onClick={() => { 
                navigate('/booking'); 
                setIsOpen(false); // باش يتسد المنيو ملي نبركو على الزر
            }}>
                BOOK NOW
            </button>
        </nav>
    );
};

export default Navbar;