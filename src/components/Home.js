import React, { useState } from 'react';
import './Home.css';

function Home() {
  const [content, setContent] = useState('Book a Ride');

  const handleOptionClick = (option) => {
    setContent(option);
  };

  return (
    <div className="home-page">
      <div className="left-panel">
        <div className="option" onClick={() => handleOptionClick('Book a Ride')}>
          Book a Ride
        </div>
        <div className="option" onClick={() => handleOptionClick('Ride History')}>
          Ride History
        </div>
        <div className="option" onClick={() => handleOptionClick('Payment Methods')}>
          Payment Methods
        </div>
        <div className="option" onClick={() => handleOptionClick('Profile')}>
          Profile
        </div>
      </div>
      <div className="right-panel">
        <h2>{content}</h2>
        {/* Cab booking options go here */}
      </div>
    </div>
  );
}

export default Home;
