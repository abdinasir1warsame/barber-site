import React from 'react';
import './intro.css';

const Intro = () => {
  return (
    <div className="intro-section">
      <div className="intro">
        <p className="intro-text">
          It's a new day,
          <span id="color-change" className="intro-text">
            a new opportunity to sculpt the best version of yourself. Embrace
            the transformation,
          </span>
          and experience the art of grooming with precision and style. Step out
          with confidence and make your mark on the world.
        </p>
      </div>
    </div>
  );
};

export default Intro;
