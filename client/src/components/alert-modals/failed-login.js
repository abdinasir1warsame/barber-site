import React, { useState } from 'react';

import './alert.css';

const FailedLoginModal = () => {
  const [isOpen, setIsOpen] = useState(true);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      {isOpen && (
        <div className="card-background">
          {' '}
          {/* Apply the card-background class */}
          <div id="card" className="animated fadeIn">
            <div id="upper-side-failed">
              {/* SVG code */}
              <svg
                version="1.1"
                id="checkmark"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                xmlSpace="preserve"
              >
                <circle
                  fill="none"
                  stroke="#ffffff"
                  strokeWidth="5"
                  strokeMiterlimit="10"
                  cx="109.486"
                  cy="104.353"
                  r="32.53"
                />
                <path
                  fill="none"
                  stroke="#ffffff"
                  strokeWidth="5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M94,94l30,30"
                />
                <path
                  fill="none"
                  stroke="#ffffff"
                  strokeWidth="5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M94,124l30,-30"
                />
              </svg>

              <h3 id="status">failed to login</h3>
            </div>
            <div id="lower-side">
              <p id="message">This user is not Found!</p>
              <a href="#" id="contBtn-failed" onClick={handleClose}>
                Try Again
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FailedLoginModal;
