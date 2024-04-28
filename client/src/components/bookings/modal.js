import React, { useState } from 'react';
import barberImage3 from '../../assets/employee-card/barber3.webp';
import './bookingsDate.css';

const Modal = () => {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
    document.body.style.overflow = 'hidden';
  };

  const handleCloseModal = () => {
    setShowModal(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <div>
      <button onClick={handleOpenModal}>Open Modal</button>

      <div
        className={`modal fade ${showModal ? 'show' : ''}`}
        tabIndex="-1"
        role="dialog"
        style={{ display: showModal ? 'block' : 'none' }}
      >
        <div className="modal-dialog modal-xl" role="document">
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
                    src={barberImage3}
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
                          <div className="time-slot">
                            <div className="icon">
                              <i className="fas fa-clock"></i>
                            </div>
                            <div className="time-option">10:00 AM</div>
                          </div>
                          <div className="time-slot">
                            <div className="icon">
                              <i className="fas fa-clock"></i>
                            </div>
                            <div className="time-option">11:00 AM</div>
                          </div>
                          <div className="time-slot">
                            <div className="icon">
                              <i className="fas fa-clock"></i>
                            </div>
                            <div className="time-option">12:00 PM</div>
                          </div>
                        </div>
                        <div className="middle-time">
                          <div className="time-slot">
                            <div className="icon">
                              <i className="fas fa-clock"></i>
                            </div>
                            <div className="time-option">1:00 PM</div>
                          </div>
                          <div className="time-slot">
                            <div className="icon">
                              <i className="fas fa-clock"></i>
                            </div>
                            <div className="time-option">2:00 PM</div>
                          </div>
                          <div className="time-slot">
                            <div className="icon">
                              <i className="fas fa-clock"></i>
                            </div>
                            <div className="time-option">3:00 PM</div>
                          </div>
                        </div>
                        <div className="left-slots">
                          <div className="time-slot">
                            <div className="icon">
                              <i className="fas fa-clock"></i>
                            </div>
                            <div className="time-option">4:00 PM</div>
                          </div>
                          <div className="time-slot">
                            <div className="icon">
                              <i className="fas fa-clock"></i>
                            </div>
                            <div className="time-option">5:00 PM</div>
                          </div>
                          <div className="time-slot">
                            <div className="icon">
                              <i className="fas fa-clock"></i>
                            </div>
                            <div className="time-option">6:00 PM</div>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-btn-div">
              <div className="employee-name-div">
                <h1 className="employee-name">Nasir Warsame</h1>
              </div>
              <button className="modal-btn">CONTINUE</button>
            </div>
            {/* <div className="modal-footer">
              <button
                type="button"
                className="btn close"
                id="footer-btn"
                data-dismiss="modal"
              >
                Close
              </button>
            </div> */}
          </div>
        </div>
      </div>
      {/* Overlay to prevent interactions with background content */}
      {showModal && <div className="modal-backdrop"></div>}
    </div>
  );
};

export default Modal;
