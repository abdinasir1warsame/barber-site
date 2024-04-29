import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import './navBar.css';
import { UserContext } from '../userContext/usercontext';
const NavBar = () => {
  const { user } = useContext(UserContext);
  console.log(user);
  return (
    <nav>
      <div className="nav-menu">
        <div className="logo">
          {/* <a href="#"><img src="./images/perfect logo.png" alt="Logo" /></a> */}
          <h3 className="nav-logo">WARSAME'S.</h3>
        </div>
        <ul className="nav-left">
          <li>
            <a className="home" href="/">
              Home
            </a>
          </li>
          <li>
            <a href="/home">Bookings</a>
          </li>
          <li>
            <a href="/home">Products</a>
          </li>
          <li>
            <a href="/home">About Us</a>
          </li>
        </ul>
        <ul className="register-links">
          <Link to={'/login'}>
            <li>
              <a href="">Login</a>
            </li>
          </Link>
          <Link to={'/signUp'}>
            <li>
              <a href="">Sign Up</a>
            </li>
          </Link>
          {!!user && (
            <li className="text-white">
              <a href="/signUp">{user.name}</a>
            </li>
          )}
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
