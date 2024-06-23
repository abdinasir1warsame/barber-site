import React, { useState, useContext } from 'react';
import { UserContext } from '../userContext/usercontext';
import { Link } from 'react-router-dom';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import SuccessBookingModal from '../alert-modals/booking-complete';

import './employee.css';
import barberImage1 from '../../assets/employee-card/barber1.webp';
import barberImage2 from '../../assets/employee-card/barber2.webp';
import barberImage3 from '../../assets/employee-card/barber3.webp';
import cardLogo from '../../assets/employee-card/MAIN-CROP.png';

const Employee = () => {
  const { user } = useContext(UserContext);
  const [showModal, setShowModal] = useState(false);
  const [showServiceSelection, setShowServiceSelection] = useState(false);
  const [activeTimeSlot, setActiveTimeSlot] = useState(null);
  const [activeService, setActiveService] = useState(null);
  const [selectedBarberImage, setSelectedBarberImage] = useState(null);
  const [selectedBarberName, setSelectedBarberName] = useState('');
  const [selectedDate, setSelectedDate] = useState(null);
  const [dateError, setDateError] = useState(false);
  const [timeError, setTimeError] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [bookingId, setBookingId] = useState(null);

  async function completeBooking() {
    const service = activeService !== null ? services[activeService] : null;
    const date = selectedDate ? selectedDate.toISOString().split('T')[0] : '';
    const time = activeTimeSlot !== null ? timeSlots[activeTimeSlot] : '';
    const barberName = selectedBarberName;
    const response = await axios.post('/bookings', {
      time,
      date,
      service,
      barberName,
    });
    const bookingId = response.data._id.slice(0, 15);
    setShowSuccessModal(true);
    setBookingId(bookingId);
    console.log(bookingId);
  }
  const MyDatePicker = () => {
    const handleDateChange = (date) => {
      setSelectedDate(date);
    };
    const currentDate = new Date();
    return (
      <DatePicker
        selected={selectedDate}
        minDate={currentDate}
        onChange={handleDateChange}
        className="datepicker" // Add custom class name
        placeholderText="Pick Your Date 📅" // Set placeholder text
        dateFormat="MMMM d, yyyy" // Set date format
      />
    );
  };

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
    setShowServiceSelection(true);
    if (!selectedDate) {
      setDateError(true);
      setTimeError(false); // Reset time error
    } else if (activeTimeSlot === null) {
      setTimeError(true);
      setDateError(false); // Reset date error
    } else {
      setShowServiceSelection(true); // Show the service selection interface
      setDateError(false); // Reset date error
      setTimeError(false); // Reset time error
    } // Show the service selection interface
  };

  const handleCloseModal = () => {
    if (showServiceSelection) {
      // If the service selection modal is open
      // Gather all the data
      const selectedService =
        activeService !== null ? services[activeService] : null;
      const selectedDateValue = selectedDate
        ? selectedDate.toISOString().split('T')[0]
        : '';
      const selectedTimeSlot =
        activeTimeSlot !== null ? timeSlots[activeTimeSlot] : '';

      // Log the booking data
      console.log('Booking:', {
        service: selectedService,
        date: selectedDateValue,
        timeSlot: selectedTimeSlot,
      });

      // Reset states and close modal
      setShowModal(false);
      setShowServiceSelection(false);
      setActiveService(null);
      setActiveTimeSlot(null);
      setSelectedDate(null);

      document.body.style.overflow = 'auto';
    } else {
      // If the time slot selection modal is open
      // Close the modal without gathering data
      setShowModal(false);
      setActiveTimeSlot(null);
      setSelectedDate(null);
      document.body.style.overflow = 'auto';
    }
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
            <h3 id="employee" className="title-a">
              Our Selection Of Professionals
            </h3>
            <p className="subtitle-a">
              Meet Our Skilled Team of Barbers: Where Every Cut Tells a Story
              and Every Style is Crafted with Precision and Passion!
            </p>
            <div className="line-mf"></div>
          </div>
        </div>

        <section className=" employee-section">
          <div className="barber-card">
            <Link
              to={user ? '#' : '/login'}
              className="book-now"
              onClick={
                user ? () => handleOpenModal(barberImage3, 'Abdi Somali') : null
              }
            >
              <div>
                <i className="fas fa-calendar-check booking-icon"></i>
              </div>
              <div>
                <p className="book-now-sub">click here to</p>
                <p
                  id="barberBooking1"
                  className="booking-now-text"
                  onClick={() => handleOpenModal(barberImage3, 'Abdi Somali')}
                >
                  BOOK AN <br />
                  APPOINTMENT
                </p>
              </div>
            </Link>
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
            <Link
              to={user ? '#' : '/login'}
              className="book-now"
              onClick={
                user
                  ? () => handleOpenModal(barberImage2, 'Latif Warsame')
                  : null
              }
            >
              <div>
                <i className="fas fa-calendar-check booking-icon"></i>
              </div>
              <div>
                <p className="book-now-sub">click here to</p>
                <p
                  id="barberBooking2"
                  className="booking-now-text"
                  onClick={() => handleOpenModal(barberImage2, 'Latif Warsame')}
                >
                  BOOK AN <br />
                  APPOINTMENT
                </p>
              </div>
            </Link>
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
            <Link
              to={user ? '#' : '/login'}
              className="book-now"
              onClick={
                user
                  ? () => handleOpenModal(barberImage1, 'Nasir Warsame')
                  : null
              }
            >
              <div>
                <i className="fas fa-calendar-check booking-icon"></i>
              </div>
              <div>
                <p className="book-now-sub">click here to</p>
                <p
                  id="barberBooking3"
                  className="booking-now-text"
                  onClick={() => handleOpenModal(barberImage1, 'Nasir Warsame')}
                >
                  BOOK AN <br />
                  APPOINTMENT
                </p>
              </div>
            </Link>
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
        {/* <div className="steps-container">
          {' '}
          <div class="steps-title ">
            <p>
              <span>STEP 1:</span> Choose a Barber
            </p>
          </div>
          <div className="step-arrow">
            <i class="arrow-icon fa-solid fa-arrow-right"></i>
          </div>
          <div class="steps-title">
            <p>
              <span>STEP 2:</span> Choose a Time
            </p>
          </div>
          <div className="step-arrow">
            <i class="arrow-icon fa-solid fa-arrow-right"></i>
          </div>
          <div class="steps-title">
            <p>
              <span>STEP 3:</span> Choose a Service
            </p>
          </div>
        </div> */}

        <div className="section-sep2"></div>
      </div>
      <div>
        {/* <button onClick={handleOpenModal}>Open Modal</button> */}
        {showSuccessModal && <SuccessBookingModal bookingId={bookingId} />}
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
                {dateError && <p>Please choose a date</p>}
                {timeError && <p>Please choose a time</p>}
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

                <div id="modal-btn-div" className="modal-btn-div">
                  <div className="employee-name-div">
                    <h1 className="employee-name">{selectedBarberName}</h1>
                  </div>
                  <button
                    className={`modal-btn ${
                      activeService !== null ? 'modal-btn-active' : ''
                    }`}
                    onClick={() => {
                      handleCloseModal();
                      completeBooking();
                    }}
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
                          {/* <div className="card-header bg-dark">
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
                          </div> */}

                          <div className="mx-0 mb-0 row justify-content-sm-center justify-content-start px-1">
                            <MyDatePicker />
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
                          <input
                            type="hidden"
                            id="pickedDate"
                            name="pickedDate"
                            value={
                              selectedDate
                                ? selectedDate.toISOString().split('T')[0]
                                : ''
                            }
                          />
                          <input
                            type="hidden"
                            id="timeSlotValue"
                            name="timeSlotValue"
                            value={
                              activeTimeSlot !== null
                                ? timeSlots[activeTimeSlot]
                                : ''
                            }
                          />
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
                      activeTimeSlot !== null && selectedDate !== null
                        ? 'modal-btn-active'
                        : ''
                    }`}
                    onClick={handleContinue}
                    disabled={activeTimeSlot === null || selectedDate === null} // Disable button if no time slot or date is selected
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
