import React from 'react';
import './contact.css';

const Contact = () => {
  return (
    <div>
      <div className="col-sm-12">
        <div className="title-box3 ">
          <h3 className="title-a">Discover More About Our Shop</h3>
          <p className="subtitle-a">
            Unveil Everything You Need to Know: From Our Location to Opening
            Times and Contact Information
          </p>
          <div className="line-mf3"></div>
        </div>
      </div>
      <div className=" faq-title-section">
        <div className="faq-container">
          <div className="contact-image-half"></div>
          <div className="empty-half">
            <div className="empty-half-text-container">
              <p className="empty-half-text">
                — Questions? Refer to our FAQ or contact us! —
              </p>
            </div>
          </div>
          <div className="text-overlay">
            <div className="contact-image-text">SHOP INFORMATION</div>
            {/* <div className="contact-sub-text">QUESTIONS</div> */}
          </div>
        </div>
      </div>
      <div className="contact-section">
        <div className="contact-and-hours-section">
          <div className="contact-container">
            <div className="contact-us">
              <div className="contact-titles"> Contact</div>
              <p className="contact-text">
                For prompt response, please use our Tawk online chat feature or
                text your Barber’s mobile directly. Otherwise, you may call us
                at (424) 393-4015.
              </p>
            </div>
            <div className="shop-location">
              <div className="contact-titles"> Shop Location</div>
              <div>
                <p>5610 W. Manchester Ave. Los Angeles, CA 90045</p>{' '}
              </div>
            </div>
          </div>
          <div className="opening-hours">
            <div className="contact-titles"> Hours</div>{' '}
            <div className="opening-day-time">
              <p className="contact-day">Monday:</p>
              <p>9:00am – 6:30pm</p>
            </div>
            <div className="opening-day-time">
              <p className="contact-day">Tuesday:</p>
              <p>9:00am – 6:30pm</p>
            </div>
            <div className="opening-day-time">
              <p className="contact-day">Wednesday:</p>
              <p>9:00am – 6:30pm</p>
            </div>
            <div className="opening-day-time">
              <p className="contact-day">Thursday:</p>
              <p>9:00am – 6:30pm</p>
            </div>
            <div className="opening-day-time">
              <p className="contact-day">Friday:</p>
              <p>9:00am – 6:30pm</p>
            </div>
            <div className="opening-day-time">
              <p className="contact-day">Saturday:</p>
              <p>9:00am – 6:30pm</p>
            </div>
            <div className="opening-day-time">
              <p className="contact-day">Sunday:</p>
              <p>9:00am – 6:30pm</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
