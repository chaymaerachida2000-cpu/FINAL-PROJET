import React from 'react';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero" style={{ backgroundImage: `url('/imgplaya.jpg')` }}>
            
            <div className="hero-content">
                <h1>GOLDEN MAR VALENCIA</h1>
                <p>Premium Parasols & Seafood Experience</p>
            </div>

            <div className="services-bar">
                <div className="item"><span>🐚</span><p>RELAX</p></div>
                <div className="item"><span>🌅</span><p>SUNSET</p></div>
                <div className="item"><span>🍸</span><p>DRINKS</p></div>
            </div>
            
        </section>
    );
};

export default Hero;