import React, { useState } from 'react';
import './employee.css';
import barberImage1 from '../../assets/employee-card/barber1.webp';
import barberImage2 from '../../assets/employee-card/barber2.webp';
import barberImage3 from '../../assets/employee-card/barber3.webp';
import cardLogo from '../../assets/employee-card/MAIN-CROP.png';

const Employee = () => {
  const [showModal, setShowModal] = useState(false);
  const [showServiceSelection, setShowServiceSelection] = useState(false);
  const [activeTimeSlot, setActiveTimeSlot] = useState(null);
  const [activeService, setActiveService] = useState(null);
  const [selectedBarberImage, setSelectedBarberImage] = useState(null);
  const [selectedBarberName, setSelectedBarberName] = useState('');

  const handleOpenModal = (image, name) => {
    setSelectedBarberImage(image);
    setSelectedBarberName(name);
    setShowModal(true);
    document.body.style.overflow = 'hidden';
  };
  const handleTimeSlotClick = (timeSlotIndex) => {
    if (activeTimeSlot === timeSlotIndex) {
      setActiveTimeSlot(null); // Remove active class if clicked again
    } else {
      setActiveTimeSlot(timeSlotIndex); // Set active class
    }
  };
  const handleServiceClick = (index) => {
    if (activeService === index) {
      setActiveService(null); // Remove active class if clicked again
    } else {
      setActiveService(index); // Set active class
    }
  };
  const handleContinue = () => {
    setShowServiceSelection(true); // Show the service selection interface
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setShowServiceSelection(false);
    setActiveService(null);
    setActiveTimeSlot(null);
    document.body.style.overflow = 'auto';
  };
  const timeSlots = [
    '10:00 AM',
    '11:00 AM',
    '12:00 PM',
    '1:00 PM',
    '2:00 PM',
    '3:00 PM',
    '4:00 PM',
    '5:00 PM',
    '6:00 PM',
  ];
  const services = [
    { name: 'Haircut & Styles', price: '£ 35.00' },
    { name: 'Haircut & Styles', price: '£ 40.00' },
    { name: 'Haircut & Styles', price: '£ 45.00' },
    { name: 'Haircut & Styles', price: '£ 50.00' },
    { name: 'Haircut & Styles', price: '£ 55.00' },
  ];
  return (
    <div>
      <div className=" employee-container">
        <div className="col-sm-12">
          <div className="title-box ">
            <h3 className="title-a">Our Selection Of Professionals</h3>
            <p className="subtitle-a">
              Meet Our Skilled Team of Barbers: Where Every Cut Tells a Story
              and Every Style is Crafted with Precision and Passion!
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
                <p
                  id="barberBooking1"
                  className="booking-now-text"
                  onClick={() => handleOpenModal(barberImage3, 'Abdi Somali')}
                >
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
                    the individual. Specializing in creating unique, custom
                    looks that resonate with each client's personal style,
                    ensuring a distinct and personalized experience.
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
                <p
                  id="barberBooking2"
                  className="booking-now-text"
                  onClick={() => handleOpenModal(barberImage2, 'Latif Warsame')}
                >
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
                    the individual. Specializing in creating unique, custom
                    looks that resonate with each client's personal style,
                    ensuring a distinct and personalized experience.
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
                <p
                  id="barberBooking3"
                  className="booking-now-text"
                  onClick={() => handleOpenModal(barberImage1, 'Nasir Warsame')}
                >
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

        <div className="section-sep2"></div>
      </div>
      <div>
        {/* <button onClick={handleOpenModal}>Open Modal</button> */}
        <div
          className={`modal fade ${
            showModal
              ? 'show fade-in d-flex justify-content-center align-items-center'
              : ''
          }`}
          tabIndex="-1"
          role="dialog"
          style={{ display: showModal ? 'block' : 'none' }}
        >
          <div className="modal-dialog modal-xl" role="document">
            {showServiceSelection ? ( // Check if service selection interface should be shown
              <div className="modal-content">
                <div className="modal-header">
                  <h1 className="modal-title">CHOOSE A SERVICE</h1>

                  <button
                    type="button"
                    className="close"
                    onClick={handleCloseModal}
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>

                <div className="">
                  <div className="modal-main">
                    <div className="booking-image-container">
                      <img
                        className="booking-image"
                        src={selectedBarberImage}
                        alt="Flag"
                      />
                    </div>

                    <div className="service-section">
                      <div className="service-body">
                        <h1 className="service-header">
                          Select Your Service ✄
                        </h1>
                        <div className="services-container">
                          {services.map((service, index) => (
                            <div
                              key={index}
                              className={`service-container ${
                                activeService === index ? 'service-active' : ''
                              }`}
                              onClick={() => handleServiceClick(index)}
                            >
                              <div
                                className={`service-btn ${
                                  activeService === index
                                    ? 'service-btn-active'
                                    : ''
                                }`}
                              >
                                {activeService === index ? (
                                  <span>&#10003;</span>
                                ) : (
                                  '+'
                                )}
                              </div>
                              <p
                                className={`service-name ${
                                  activeService === index
                                    ? 'service-name-active'
                                    : ''
                                }`}
                              >
                                {service.name}
                              </p>
                              <p
                                className={`service-price ${
                                  activeService === index
                                    ? 'service-price-active'
                                    : ''
                                }`}
                              >
                                {service.price}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="modal-btn-div">
                  <div className="employee-name-div">
                    <h1 className="employee-name">{selectedBarberName}</h1>
                  </div>
                  <button
                    className={`modal-btn ${
                      activeService !== null ? 'modal-btn-active' : ''
                    }`}
                    onClick={handleCloseModal}
                  >
                    CHECKOUT
                  </button>
                </div>

                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn close"
                    id="footer-btn"
                    data-dismiss="modal"
                    onClick={handleCloseModal}
                  >
                    Close
                  </button>
                </div>
              </div>
            ) : (
              <div className="modal-content bg-blur">
                <div className="modal-header">
                  <h1 className="modal-title">CHOOSE A TIME SLOT</h1>
                  <button
                    type="button"
                    className="close"
                    onClick={handleCloseModal}
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  <div className="modal-main">
                    <div className="booking-image-container">
                      <img
                        className="booking-image"
                        src={selectedBarberImage}
                        alt="Flag"
                      />
                    </div>
                    <div className="calender-main row justify-content-center mx-0">
                      <div className="date-card border-0">
                        <form className="booking-form" autoComplete="off">
                          <div className="card-header bg-dark">
                            <div className="mx-0 mb-0 row justify-content-sm-center justify-content-start px-1">
                              <input
                                type="text"
                                id="dp1"
                                className="datepicker"
                                placeholder="Pick Your Date  📅"
                                name="date"
                                readOnly
                              />
                            </div>
                          </div>
                          <div className="slot-container">
                            <div className="right-slots">
                              {timeSlots.slice(0, 3).map((timeSlot, index) => (
                                <div
                                  key={index}
                                  className={`time-slot ${
                                    activeTimeSlot === index
                                      ? 'time-slot-active'
                                      : ''
                                  }`}
                                  onClick={() => handleTimeSlotClick(index)}
                                >
                                  <div className="icon">
                                    <i className="fas fa-clock"></i>
                                  </div>
                                  <div className="time-option">{timeSlot}</div>
                                </div>
                              ))}
                            </div>
                            <div className="middle-time">
                              {timeSlots.slice(3, 6).map((timeSlot, index) => (
                                <div
                                  key={index + 3}
                                  className={`time-slot ${
                                    activeTimeSlot === index + 3
                                      ? 'time-slot-active'
                                      : ''
                                  }`}
                                  onClick={() => handleTimeSlotClick(index + 3)}
                                >
                                  <div className="icon">
                                    <i className="fas fa-clock"></i>
                                  </div>
                                  <div className="time-option">{timeSlot}</div>
                                </div>
                              ))}
                            </div>
                            <div className="left-slots">
                              {timeSlots.slice(6, 9).map((timeSlot, index) => (
                                <div
                                  key={index + 6}
                                  className={`time-slot ${
                                    activeTimeSlot === index + 6
                                      ? 'time-slot-active'
                                      : ''
                                  }`}
                                  onClick={() => handleTimeSlotClick(index + 6)}
                                >
                                  <div className="icon">
                                    <i className="fas fa-clock"></i>
                                  </div>
                                  <div className="time-option">{timeSlot}</div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="modal-btn-div">
                  <div className="employee-name-div">
                    <h1 className="employee-name">{selectedBarberName}</h1>
                  </div>
                  <button
                    className={`modal-btn ${
                      activeTimeSlot !== null ? 'modal-btn-active' : ''
                    }`}
                    onClick={handleContinue}
                    disabled={activeTimeSlot === null} // Disable button if no time slot is active
                  >
                    CONTINUE
                  </button>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn close"
                    id="footer-btn"
                    data-dismiss="modal"
                    onClick={handleCloseModal}
                  >
                    Close
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
        {/* Overlay to prevent interactions with background content */}
        {showModal && <div className="modal-backdrop"></div>}
      </div>
    </div>
  );
};

export default Employee;
