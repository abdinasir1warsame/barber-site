import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './bookings.css';
import barber1 from '../assets/employee-card/barber1.webp';
import barber2 from '../assets/employee-card/barber2.webp';
import barber3 from '../assets/employee-card/barber3.webp';

const Bookings = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    axios.get('/bookings').then((response) => {
      setBookings(response.data);
    });
  }, []);

  // Function to get the barber image based on barber's name
  const getBarberImage = (barberName) => {
    switch (barberName) {
      case 'Abdi Somali':
        return barber3;
      case 'Latif Warsame':
        return barber2;
      case 'Nasir Warsame':
        return barber1;
      default:
        return barber1; // default image if no match
    }
  };

  return (
    <div className="booking-page">
      <div className="col-sm-12">
        <div className="title-box4 ">
          <h3 id="book" className="title-a">
            View Your Bookings
          </h3>

          <div className="line-mf"></div>
        </div>
      </div>
      {bookings.map((booking, index) => (
        <div className="booking-card" key={index}>
          <div className="booking-card__barber-info">
            <img
              src={getBarberImage(booking.barberName)}
              className="booking-card__barber-image"
              alt={`Image of ${booking.barberName}`}
            />
            <div className="booking-card__barber-name">
              {booking.barberName}
            </div>
          </div>
          <div className="booking-card__details">
            <div className="booking-card__user">
              Booking for: {booking.userName}
            </div>
            <div className="booking-card_service_and_price">
              <div className="booking-card__service">
                <div className="booking-card__service-name">
                  {booking.service.name}
                </div>
                <div className="booking-card__service-price">
                  {booking.service.price}
                </div>
              </div>
              <div className="booking-card__service">
                <div className="booking-card__service-name">Booking date</div>
                <div className="booking-card__service">{booking.date}</div>
              </div>
              <div className="booking-card__service">
                <div className="booking-card__service-name">
                  Booking Time
                  <div className="booking-card__service">{booking.time}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Bookings;
