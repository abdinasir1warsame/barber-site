import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import NavLogo from './product-img/perfect-logo.png';
import './navBar.css';
import { UserContext } from '../userContext/usercontext';
const NavBar = () => {
  const { user } = useContext(UserContext);
  // console.log(user);
  return (
    //   <div>
    //   <div className="mobile-nav-wrapper">
    //   <nav className="mobile">
    //     <input type="checkbox" id="menu" name="menu" className="m-menu__checkbox">
    //     <label className="m-menu__toggle" for="menu">
    //       <svg width="35" height="35" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="butt" stroke-linejoin="arcs"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
    //     </label>
    //     <label className="m-menu__overlay" for="menu"></label>

    //     <div className="m-menu">
    //       <div className="m-menu__header">
    //         <label className="m-menu__toggle" for="menu">
    //           <svg width="35" height="35" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="butt" stroke-linejoin="arcs">
    //             <line x1="18" y1="6" x2="6" y2="18"></line>
    //             <line x1="6" y1="6" x2="18" y2="18"></line>
    //           </svg>
    //         </label>
    //         <span>MENU</span>
    //       </div>
    //       <ul>
    //        <li><label>Home</label>

    //         </li>
    //         <li><label>Profile</label></li>

    //         <li>

    //           <label className="a-label__chevron" for="item-2">Our Products</label>
    //           <input type="checkbox" id="item-2" name="item-2" className="m-menu__checkbox">
    //           <div className="m-menu">
    //             <div className="m-menu__header">
    //               <label className="m-menu__toggle" for="item-2">
    //                 <svg width="35" height="35" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="butt" stroke-linejoin="arcs">
    //                   <path d="M19 12H6M12 5l-7 7 7 7"/>
    //                 </svg>
    //               </label>
    //               <span>car brands</span>
    //             </div>
    //             <ul>
    //               <a href=""><li><label>Beard Oil</label></li></a>
    //               <a href=""><li><label>Hair Comb</label></li></a>
    //              <a href="">  <li><label>Hair Brush</label></li></a>
    //             <a href="">  <li><label>Hair Sponge</label></li></a>
    //             <a href="">   <li><label>Hair Oil</label></li></a>

    //           </div>
    //         </li>
    //         <li><label>Bookings</label></li>

    //          <li><label>Contact us</label></li>
    //          <li><label>Faq us</label></li>
    //       </ul>
    //     </div>
    //   </nav>
    //   <div className="mobile-title">WARSAME'S</div>
    //   <div className="mobile-logo-wrapper" >
    //     <img src="./img/perfect logo.png" alt="" className="mobile-logo">
    //   </div>
    // </div>

    // <section className="navigation-bar">
    //   <div className="nav-items"> <div className="navbar-logo">WARSAME'S</div>
    //   <div className="first-half">
    //     <ul className="navigation-list">
    //       <div className="third-li-container navigation-boxes">
    //           <li>Home</li>

    //       </div>
    //       <div className="fourth-li-container navigation-boxes">
    //           <li>Book</li>

    //       </div>
    //       <div className="list-wrapper">
    //       <div className="first-li-container navigation-boxes">
    //           <li>Our Products</li>

    //       </div>
    //     <div className="product-wrapper">
    //       <a href=""><div className="hair-comb category-product-box"><span className="category-title"> Hair Cream </span></div></a>
    //         <a href=""><div className="hair-oil category-product-box"><span className="category-title"> Beard Oil </span></div></a>
    //       <a href=""><div className="hair-sponge category-product-box"><span className="category-title"> Hair Comb </span></div></a>
    //       <a href=""><div className="beard-oil category-product-box"><span className="category-title"> Hair Sponge </span></div></a>

    //     </div>
    //       </div>

    //       <div className="seventh-li-container navigation-boxes">
    //           <li>Faq's</li>

    //       </div>
    //       <div className="sixth-li-container navigation-boxes">
    //           <li>Contact Us</li>

    //       </div>

    //     </ul>
    //   </div>
    //   <div className="second-half">

    //       <div className="login-sign-btn">
    //         Login

    //       </div>
    //       <div className="login-sign-btn">
    //           Sign Up

    //         </div>
    //     </a>

    // </section>
    // </div>
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
              <span>MENU</span>
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
                    <span>car brands</span>
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

              <li>Our Products</li>

              <li>Contact Us</li>
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
            <Link to={'/signUp'} className="login-sign-btn">
              {' '}
              {!!user && <li className="logOutBtn">LOG OUT</li>}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NavBar;
