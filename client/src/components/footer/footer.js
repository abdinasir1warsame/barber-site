import React from 'react';
import Logo from '../../assets/employee-card/MAIN-CROP.png';
import './footer.css';

const Footer = () => {
  return (
    <footer>
      <section className="desktop-footer-wrapper">
        <div className="first-section">
          <img src={Logo} alt="" className="desktop-footer-logo" />
          <div className="footer-description">
            Warsame's barber epitomizes the pinnacle of grooming excellence in
            Birmingham, specializing in the meticulous artistry of hair
            crafting.
          </div>
        </div>
        <div className="second-section">
          <ul>
            <span> About</span>
            <a href="">
              <li className="foot-items">Online Booking</li>
            </a>
            <a href="">
              <li className="foot-items">Grooming Products</li>
            </a>
            <a href="">
              <li className="foot-items">Expert styles</li>
            </a>
            <a href="">
              <li className="foot-items">Phone Bookings</li>
            </a>
          </ul>
        </div>
        <div className="third-section">
          <ul>
            <span>Our Products Brands</span>
            <a href="">
              <li className="foot-items">Hair Oil</li>
            </a>
            <a href="">
              <li className="foot-items">Hair Brush</li>
            </a>
            <a href="">
              <li className="foot-items">Hair Sponge</li>
            </a>
            <a href="">
              <li className="foot-items">Hai Comb</li>{' '}
            </a>
            <a href="">
              <li className="foot-items">Beard Oil</li>
            </a>
          </ul>
        </div>
        <div className="fourth-section">
          <ul>
            <span>Our Professionals</span>
            <a href="">
              <li className="foot-items">Abdilatif Warsame</li>
            </a>
            <a href="">
              <li className="foot-items">Nasir Warsame</li>
            </a>
            <a href="">
              <li className="foot-items">Abdi Somali</li>
            </a>
          </ul>
        </div>
        <div className="last-section">
          <ul>
            <span>Contact</span>
            <a href="tel:+971 50 259 7431">
              <li className="foot-items">
                <strong>P: </strong>+447519551171
              </li>
            </a>
            <a href="">
              <li className="foot-items">
                <strong>E: </strong>Awarsame1993@gmail.com
              </li>
            </a>
          </ul>
        </div>
      </section>

      <section className="mobile-footer-wrapper">
        <div className="first-section">
          <img src="./MAIN-CROP.png" className="mobile-footer-logo" alt="" />
        </div>
        <div className="second-section">
          <ul>
            <a href="">
              <li className="foot-item">Our Products</li>
            </a>
            <a href="">
              {' '}
              <li className="foot-item">Our Professionals</li>
            </a>

            <a href="">
              {' '}
              <li className="foot-item">About Us</li>
            </a>
            <a href="">
              <li className="foot-item">Contact Us</li>
            </a>
          </ul>
        </div>
        <div className="mobile-footer-horizontal-line"> </div>
        <div className="third-section">
          <ul>
            <a href="">
              <li className="foot-items">
                <strong>P: </strong>+447519551161
              </li>
            </a>
            <a href="">
              <li className="foot-items">
                <strong>E: </strong>Awarsame1993@gmail.com
              </li>
            </a>
          </ul>
        </div>
      </section>

      <section className="footer-info-wrapper">
        <span>Warsame's Premium Barber © 2024 All Rights Reserved</span>
      </section>
    </footer>
  );
};

export default Footer;
