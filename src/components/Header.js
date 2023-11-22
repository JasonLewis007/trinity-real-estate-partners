import React, { useState, useEffect } from 'react';
import './Header.css';

const Header = () => {
  const [currentImage, setCurrentImage] = useState('city'); // Initial image type

  const images = {
    city: 'city-image.jpg',
    country: 'country-image.jpg',
    mountain: 'mountain-image.jpg',
  };

  useEffect(() => {
    // Timer to switch images every 5 seconds (adjust as needed)
    const imageTimer = setInterval(() => {
      switch (currentImage) {
        case 'city':
          setCurrentImage('country');
          break;
        case 'country':
          setCurrentImage('mountain');
          break;
        case 'mountain':
          setCurrentImage('city');
          break;
        default:
          break;
      }
    }, 5000);

    // Cleanup the timer on component unmount
    return () => clearInterval(imageTimer);
  }, [currentImage]);

  return (
    <div className="header-container">
      <div
        className="Image"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/${images[currentImage]})`,
          backgroundSize: 'cover',
          animation: 'fade 1s ease-in-out',
        }}
      ></div>
      {/* Rest of your component */}
    </div>
  );
};

export default Header;


