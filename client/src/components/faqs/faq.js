import React from 'react';
import './faq.css';

const Faq = () => {
  return (
    <div data-aos="fade-up">
      <div className="col-sm-12">
        <div className="title-box3 ">
          <h3 className="title-a">Got Questions? We Have Answers!</h3>
          <p className="subtitle-a">
            Find Solutions to Your Queries About Our Services, Booking Process,
            and More!
          </p>
          <div className="line-mf3"></div>
        </div>
      </div>

      <div className=" faq-title-section">
        <div className="faq-container">
          <div
            data-aos="fade-down"
            data-aos-delay="250"
            className="image-half"
          ></div>
          <div className="empty-half"></div>
          <div className="text-overlay">
            <div data-aos="fade-in" data-aos-delay="500" className="main-text">
              FREQUENTLY ASKED
            </div>

            <div data-aos="fade-in" data-aos-delay="500" className="sub-text">
              QUESTIONS
            </div>
          </div>
        </div>
      </div>
      <div className="faq-section">
        <div id="faq" className="faq-body">
          <div className="faq-list">
            <div data-aos="fade-up" data-aos-delay="250">
              <details open title="How can I book an appointment?">
                <summary>How can I book an appointment?</summary>
                <p className="faq-content">
                  You can book an appointment by calling our shop directly or
                  using our online booking system.
                </p>
              </details>
            </div>
            <div data-aos="fade-up" data-aos-delay="350">
              <details title="What services do you offer?">
                <summary>What services do you offer?</summary>
                <p className="faq-content">
                  We offer a range of services including haircuts, beard trims,
                  hot towel shaves, and styling consultations.
                </p>
              </details>
            </div>
            <div data-aos="fade-up" data-aos-delay="450">
              <details title="What are your operating hours?">
                <summary>What are your operating hours?</summary>
                <p className="faq-content">
                  We are open from Tuesday to Saturday, 10:00 AM to 7:00 PM. We
                  are closed on Sundays and Mondays.
                </p>
              </details>
            </div>
            <div data-aos="fade-up" data-aos-delay="550">
              <details title="Do I need to bring anything with me to my appointment?">
                <summary>Do I need to bring anything with me ?</summary>
                <p className="faq-content">
                  You don't need to bring anything specific. Just come as you
                  are, and we'll take care of the rest!
                </p>
              </details>
            </div>
            <div data-aos="fade-up" data-aos-delay="650">
              <details title="Can I walk in for a haircut or should I make an appointment?">
                <summary>Can I walk in for a haircut ?</summary>
                <p className="faq-content">
                  While appointments are preferred to ensure you get the time
                  slot you want, walk-ins are welcome based on availability.
                </p>
              </details>
            </div>
            <div data-aos="fade-up" data-aos-delay="750">
              <details title="What are your sanitation protocols?">
                <summary>What are your sanitation protocols?</summary>
                <p className="faq-content">
                  We strictly adhere to sanitation guidelines to ensure the
                  safety of our customers. All equipment is thoroughly cleaned
                  and sanitized between each client.
                </p>
              </details>
            </div>
          </div>
        </div>
      </div>
      <div className="section-sep2"></div>
    </div>
  );
};
export default Faq;
