import React, { useState, useContext } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import NavLogo from './product-img/perfect-logo.png';
import './navBar.css';
import { UserContext } from '../userContext/usercontext';
import { Navigate } from 'react-router-dom';
const NavBar = () => {
  const { user } = useContext(UserContext);
  const { setUser } = useContext(UserContext);
  const [loggedOut, setLoggedOut] = useState(false);

  const handleLogout = async () => {
    try {
      await axios.post('/logout', {}, { withCredentials: true });
      setUser(null); // Clear user context
      setLoggedOut(true);
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  if (loggedOut) {
    return <Navigate to={'/'} />;
  }

  return (
    <div>
      <div className="mobile-nav-wrapper">
        <nav className="mobile">
          <input
            type="checkbox"
            id="menu"
            name="menu"
            className="m-menu__checkbox"
          />
          <label className="m-menu__toggle" htmlFor="menu">
            <svg
              width="35"
              height="35"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#fff"
              stroke-width="2"
              stroke-linecap="butt"
              stroke-linejoin="arcs"
            >
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </label>
          <label className="m-menu__overlay" htmlFor="menu"></label>

          <div className="m-menu">
            <div className="m-menu__header">
              <label className="m-menu__toggle" htmlFor="menu">
                <svg
                  width="35"
                  height="35"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#fff"
                  stroke-width="2"
                  stroke-linecap="butt"
                  stroke-linejoin="arcs"
                >
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </label>
              <span id="user-name">{user ? user.name : 'Menu'}</span>
            </div>
            <ul>
              <li>
                <label>Home</label>
              </li>
              <li>
                <label>Profile</label>
              </li>

              <li>
                <label className="a-label__chevron" htmlFor="item-2">
                  Our Products
                </label>
                <input
                  type="checkbox"
                  id="item-2"
                  name="item-2"
                  className="m-menu__checkbox"
                />
                <div className="m-menu">
                  <div className="m-menu__header">
                    <label className="m-menu__toggle" htmlFor="item-2">
                      <svg
                        width="35"
                        height="35"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#000000"
                        stroke-width="2"
                        stroke-linecap="butt"
                        stroke-linejoin="arcs"
                      >
                        <path d="M19 12H6M12 5l-7 7 7 7" />
                      </svg>
                    </label>
                    <span>Available In Store</span>
                  </div>
                  <ul>
                    <li>
                      <a href="">
                        <label>Beard Oil</label>
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <label>Hair Comb</label>
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <label>Hair Brush</label>
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <label>Hair Sponge</label>
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <label>Hair Oil</label>
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <label>Bookings</label>
              </li>
              <li>
                <label>Contact us</label>
              </li>
              <li>
                <label>Faq us</label>
              </li>
              {!!user && (
                <li onClick={handleLogout}>
                  <label>Log Out</label>
                </li>
              )}
              {!user && (
                <Link to={'/login'}>
                  <li className="login-mobile">
                    <label>Log In</label>
                  </li>
                </Link>
              )}
              {!user && (
                <Link to={'/signUp'}>
                  <li>
                    <label>Sign Up</label>
                  </li>
                </Link>
              )}
            </ul>
          </div>
        </nav>
        <div className="mobile-title">WARSAME'S</div>
        <div className="mobile-logo-wrapper">
          <img src={NavLogo} alt="" className="mobile-logo" />
        </div>
      </div>

      <section className="navigation-bar">
        <div className="nav-items">
          <div className="navbar-logo">WARSAME'S</div>
          <div className="first-half">
            <ul className="navigation-list">
              <li>Home</li>

              <a href="#products">
                {' '}
                <li>Our Products</li>
              </a>

              <a href="#contact">
                <li>Contact Us</li>
              </a>
            </ul>
          </div>
          <div className="second-half">
            <Link to={'/login'} className="login-sign-btn">
              {' '}
              {!user && <li>Login</li>}
            </Link>
            <Link to={'/signUp'} className="login-sign-btn">
              {' '}
              {!user && <li>Sign Up</li>}
            </Link>
            <div onClick={handleLogout} className="login-sign-btn">
              {' '}
              {!!user && <li className="logOutBtn">LOG OUT</li>}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NavBar;
