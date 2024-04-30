import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="col-sm-12">
        <div className="copyright-box">
          <p className="copyright">
            &copy; Copyright <strong>Warsame's</strong>. All Rights Reserved
          </p>
          <div className="credits">
            <a href="/home">Premium Barber</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
