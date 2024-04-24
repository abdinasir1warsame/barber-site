import React from 'react';
import './employee.css';
import barberImage1 from '../../assets/employee-card/barber1.webp';
import barberImage2 from '../../assets/employee-card/barber2.webp';
import barberImage3 from '../../assets/employee-card/barber3.webp';
import cardLogo from '../../assets/employee-card/MAIN-CROP.png';
const Employee = () => {
  return (
    <div className=" employee-container">
      <div className="col-sm-12">
        <div className="title-box ">
          <h3 className="title-a">Our Selection Of Professionals</h3>
          <p className="subtitle-a">
            Meet Our Skilled Team of Barbers: Where Every Cut Tells a Story and
            Every Style is Crafted with Precision and Passion!
          </p>
          <div className="line-mf"></div>
        </div>
      </div>

      <section className=" employee-section">
        <div className="barber-card">
          <div className="book-now">
            <div>
              <i className="fas fa-calendar-check booking-icon"></i>
            </div>
            <div>
              <p>click here to</p>
              <p className="booking-now-text">
                BOOK AN <br />
                APPOINTMENT
              </p>
            </div>
          </div>
          <div className="overflow-g">
            <div className="poster">
              <img src={barberImage3} alt="" />
            </div>

            <div className="barber-details">
              <img src={cardLogo} className="barber-logo" alt="" />
              <h4 className="barber-name">Abdi Somali</h4>
              <h4 className="barber-description">
                Sleek Trims, Signature Looks
              </h4>
              <div className="rating">
                <i className="fa-solid fa-star ratings-icons"></i>
                <i className="fa-solid fa-star ratings-icons"></i>
                <i className="fa-solid fa-star ratings-icons"></i>
                <i className="fa-solid fa-star ratings-icons"></i>
                <i className="fa-regular fa-star ratings-icons"></i>
                <span className="ratings-score">4/5</span>
              </div>

              <div className="barber-info">
                <p>
                  Offers expert sleek, polished cuts and tailors each style to
                  the individual. Specializing in creating unique, custom looks
                  that resonate with each client's personal style, ensuring a
                  distinct and personalized experience.
                </p>
              </div>
              <div className="avalibility">
                <h4 className="avalibility-title">Availability Today</h4>
                <span>1pm</span>
                <span>2pm</span>
                <span>2:30pm</span>
                <span>6:00pm</span>
                <span>7:30pm</span>
              </div>
            </div>
          </div>
        </div>
        <div className="barber-card">
          <div className="book-now">
            <div>
              <i className="fas fa-calendar-check booking-icon"></i>
            </div>
            <div>
              <p>click here to</p>
              <p className="booking-now-text">
                BOOK AN <br />
                APPOINTMENT
              </p>
            </div>
          </div>
          <div className="overflow-g">
            <div className="poster">
              <img src={barberImage2} alt="" />
            </div>

            <div className="barber-details">
              <img src={cardLogo} className="barber-logo" alt="" />
              <h4 className="barber-name">Abdi Somali</h4>
              <h4 className="barber-description">
                Sleek Trims, Signature Looks
              </h4>
              <div className="rating">
                <i className="fa-solid fa-star ratings-icons"></i>
                <i className="fa-solid fa-star ratings-icons"></i>
                <i className="fa-solid fa-star ratings-icons"></i>
                <i className="fa-solid fa-star ratings-icons"></i>
                <i className="fa-regular fa-star ratings-icons"></i>
                <span className="ratings-score">4/5</span>
              </div>

              <div className="barber-info">
                <p>
                  Offers expert sleek, polished cuts and tailors each style to
                  the individual. Specializing in creating unique, custom looks
                  that resonate with each client's personal style, ensuring a
                  distinct and personalized experience.
                </p>
              </div>
              <div className="avalibility">
                <h4 className="avalibility-title">Availability Today</h4>
                <span>1pm</span>
                <span>2pm</span>
                <span>2:30pm</span>
                <span>6:00pm</span>
                <span>7:30pm</span>
              </div>
            </div>
          </div>
        </div>
        <div className="barber-card">
          <div className="book-now">
            <div>
              <i className="fas fa-calendar-check booking-icon"></i>
            </div>
            <div>
              <p>click here to</p>
              <p className="booking-now-text">
                BOOK AN <br />
                APPOINTMENT
              </p>
            </div>
          </div>
          <div className="overflow-g">
            <div className="poster">
              <img src={barberImage1} alt="" />
            </div>

            <div className="barber-details">
              <img src={cardLogo} className="barber-logo" alt="" />
              <h4 className="barber-name">Nasir Warsame</h4>
              <h4 className="barber-description">
                Innovative Designs, Expert Fades
              </h4>
              <div className="rating">
                <i className="fa-solid fa-star ratings-icons"></i>
                <i className="fa-solid fa-star ratings-icons"></i>
                <i className="fa-solid fa-star ratings-icons"></i>
                <i className="fa-solid fa-star ratings-icons"></i>
                <i className="fa-regular fa-star ratings-icons"></i>
                <span className="ratings-score">4/5</span>
              </div>

              <div className="barber-info">
                <p>
                  Specializes in modern, trendy styles, perfect fades, and
                  creative design work. Known for intricate detailing and
                  exceptional hair art, adept at the latest trends and
                  techniques, crafting unique, standout looks.
                </p>
              </div>
              <div className="avalibility">
                <h4 className="avalibility-title">Availability Today</h4>
                <span>1pm</span>
                <span>2pm</span>
                <span>2:30pm</span>
                <span>6:00pm</span>
                <span>7:30pm</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="section-sep"></div>
    </div>
  );
};

export default Employee;
