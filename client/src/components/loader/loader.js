import React from 'react';
import './loader.css';

const Loader = () => {
  return (
    <div className="loader-container">
      <div className="flex-container">
        <div className="unit">
          <div className="pole-unit mono">
            <div className="pole-top">
              <div className="ball"></div>
              <div className="cover"></div>
              <div className="band"></div>
              <div className="thin-band"></div>
            </div>
            <div className="pole-middle">
              <div className="g-container">
                <div className="pole"></div>
              </div>
            </div>
            <div className="pole-bottom">
              <div className="thin-band"></div>
              <div className="band"></div>
              <div className="cover"></div>

              <div className="shadow"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
