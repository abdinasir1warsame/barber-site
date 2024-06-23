import React from 'react';
import './hero.css';
import bannerImage from '../../assets/newMain.png';
const Hero = () => {
  return (
    <div className="responsive-banner" id="parallaxBanner">
      <img
        className="banner-image"
        src={bannerImage}
        alt=""
        data-aos="fade-up"
        data-aos-duration="1500"
      />

      <div className="banner-overlay">
        <h1 className="banner-title" data-aos="fade-down" data-aos-delay="1000">
          WARSAME'S BARBER
        </h1>
        <a href="#book">
          <button
            className="banner-button"
            data-aos="fade-up"
            data-aos-delay="1500"
          >
            BOOK NOW
          </button>
        </a>
      </div>
    </div>
  );
};

export default Hero;
