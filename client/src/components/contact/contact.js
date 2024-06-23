import React from 'react';
import './contact.css';

const Contact = () => {
  return (
    <div data-aos="fade-down">
      <div className="col-sm-12">
        <div className="title-box3 ">
          <h3 id="contact" className="title-a">
            Discover More About Our Shop
          </h3>
          <p className="subtitle-a">
            Unveil Everything You Need to Know: From Our Location to Opening
            Times and Contact Information
          </p>
          <div className="line-mf3"></div>
        </div>
      </div>
      <div
        data-aos="fade-up"
        data-aos-delay="250"
        className=" faq-title-section"
      >
        <div className="faq-container">
          <div className="contact-image-half"></div>
          <div className="empty-half">
            <div className="empty-half-text-container">
              <p
                data-aos="fade-in"
                data-aos-delay="500"
                className="empty-half-text"
              >
                — Questions? Refer to our FAQ or contact us! —
              </p>
            </div>
          </div>
          <div className="text-overlay">
            <div
              data-aos="fade-in"
              data-aos-delay="500"
              className="contact-image-text"
            >
              SHOP INFORMATION
            </div>
            {/* <div className="contact-sub-text">QUESTIONS</div> */}
          </div>
        </div>
      </div>
      <div className="contact-section">
        <div className="contact-and-hours-section">
          <div data-aos="slide-right" className="contact-container">
            <div className="contact-us">
              <div className="contact-titles"> Contact</div>
              <p className="contact-text">
                For prompt assistance, please text or call us directly at
                07482298173. Thank you for choosing our services, and we look
                forward to assisting you!
              </p>
            </div>
            <div className="shop-location">
              <div className="contact-titles"> Shop Location</div>
              <div>
                <p>191 Alma Street. Birmingham, B19 2RL</p>{' '}
              </div>
            </div>
          </div>
          <div data-aos="fade-down" className="opening-hours">
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
          <div data-aos="slide-left" className="interactive-map-container">
            <div className="interactive-map">
              <iframe
                width="450"
                height="400"
                frameborder="0"
                scrolling="no"
                marginheight="0"
                marginwidth="0"
                title="google-mps"
                src="https://maps.google.com/maps?width=450&amp;height=400&amp;hl=en&amp;q=191%20alma%20street+(Warsame's%20Barber)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              >
                <a href="https://www.gps.ie/">gps trackers</a>
              </iframe>
            </div>
          </div>
        </div>
      </div>
      <div className="section-sep2"></div>
    </div>
  );
};

export default Contact;
