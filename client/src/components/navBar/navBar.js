import React, { useContext } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link'; // Ensure this import is from 'react-router-hash-link'
import NavLogo from './product-img/perfect-logo.png';
import './navBar.css';
import { UserContext } from '../userContext/usercontext';

const NavBar = () => {
  const { user, setUser } = useContext(UserContext);

  async function logout() {
    await axios.post('/logout');
    setUser(null);
    // Handle post-logout redirection or other logic if needed
  }

  // Function to close the menu
  const closeMenu = () => {
    const menuCheckbox = document.getElementById('menu');
    if (menuCheckbox) {
      menuCheckbox.checked = false;
    }
  };

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
              strokeWidth="2"
              strokeLinecap="butt"
              strokeLinejoin="arcs"
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
                  strokeWidth="2"
                  strokeLinecap="butt"
                  strokeLinejoin="arcs"
                >
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </label>
              <span id="user-name">{user ? user.name : 'Menu'}</span>
            </div>
            <ul>
              <li>
                <label>Profile</label>
              </li>
              <li>
                <Link to={'./bookings'} onClick={closeMenu}>
                  <label>My Bookings</label>{' '}
                </Link>
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
                        strokeWidth="2"
                        strokeLinecap="butt"
                        strokeLinejoin="arcs"
                      >
                        <path d="M19 12H6M12 5l-7 7 7 7" />
                      </svg>
                    </label>
                    <span>Available In Store</span>
                  </div>
                  <ul>
                    <li>
                      <Link smooth to="/#products" onClick={closeMenu}>
                        <label>Beard Oil</label>
                      </Link>
                    </li>
                    <li>
                      <Link smooth to="/#products" onClick={closeMenu}>
                        <label>Hair Comb</label>
                      </Link>
                    </li>
                    <li>
                      <Link smooth to="/#products" onClick={closeMenu}>
                        <label>Hair Brush</label>
                      </Link>
                    </li>
                    <li>
                      <Link smooth to="/#products" onClick={closeMenu}>
                        <label>Hair Sponge</label>
                      </Link>
                    </li>
                    <li>
                      <Link smooth to="/#products" onClick={closeMenu}>
                        <label>Hair Oil</label>
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <Link smooth to="/#contact" onClick={closeMenu}>
                  <label>Contact Us</label>
                </Link>
              </li>
              <li>
                <label>Faq us</label>
              </li>
              {!!user && (
                <li onClick={logout}>
                  <label>Log Out</label>
                </li>
              )}
              <div className="login-signup-container">
                {!user && (
                  <Link to={'/login'} onClick={closeMenu}>
                    <li>
                      <label>Log In</label>
                    </li>
                  </Link>
                )}
                {!user && (
                  <Link to={'/signUp'} onClick={closeMenu}>
                    <li>
                      <label>Sign Up</label>
                    </li>
                  </Link>
                )}
              </div>
            </ul>
          </div>
        </nav>
        <Link to={'/'} className="mobile-title">
          WARSAME'S
        </Link>
        <div className="mobile-logo-wrapper">
          <img src={NavLogo} alt="" className="mobile-logo" />
        </div>
      </div>

      <section className="navigation-bar">
        <div className="nav-items">
          <Link to={'/'} className="navbar-logo">
            WARSAME'S
          </Link>
          <div className="first-half">
            <ul className="navigation-list">
              <Link smooth to="/#products" onClick={closeMenu}>
                <li>Our Products</li>
              </Link>
              <Link to={'/bookings'} onClick={closeMenu}>
                <li>My Bookings</li>
              </Link>
              <Link smooth to="/#contact" onClick={closeMenu}>
                <li>Contact Us</li>
              </Link>
            </ul>
          </div>
          <div className="second-half">
            <Link to={'/login'} className="login-sign-btn" onClick={closeMenu}>
              {!user && <li>Login</li>}
            </Link>
            <Link to={'/signUp'} className="login-sign-btn" onClick={closeMenu}>
              {!user && <li>Sign Up</li>}
            </Link>
            <div onClick={logout} className="login-sign-btn">
              {!!user && <li className="logOutBtn">LOG OUT</li>}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NavBar;
