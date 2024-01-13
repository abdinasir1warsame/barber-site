import React from 'react';
import './navBar.css';
const NavBar = () => {
  return (
    <nav>
      <div className="nav-menu">
        <div className="logo">
          {/* <a href="#"><img src="./images/perfect logo.png" alt="Logo" /></a> */}
          <h3 className="nav-logo">WARSAME'S.</h3>
        </div>
        <ul className="nav-left">
          <li>
            <a className="home" href="#">
              Home
            </a>
          </li>
          <li>
            <a href="./bookings.html">Bookings</a>
          </li>
          <li>
            <a href="#">Products</a>
          </li>
          <li>
            <a href="#">About Us</a>
          </li>
        </ul>

        <div className="burger">
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
