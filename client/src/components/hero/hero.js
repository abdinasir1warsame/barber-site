import React from 'react';
import './hero.css';
import bannerImage from '../../assets/newMain.png';
const Hero = () => {
  return (
    <div className="responsive-banner" id="parallaxBanner">
      <img className="banner-image" src={bannerImage} alt="" />

      <div className="banner-overlay">
        <h1 className="banner-title">WARSAME'S BARBER</h1>
        <a href="#book">
          {' '}
          <button className="banner-button">BOOK NOW</button>
        </a>
      </div>
    </div>
  );
};

export default Hero;
