import React from "react";
import "./ContactForm.css";

function ContactForm() {
  return (
    <section className="contact-section">
      <div className="contact-container">
        {/* Heading */}
        <div className="contact-header">
          <h2>Get In Touch With Us</h2>
          <p>
            For More Information About Our Product & Services. Please Feel Free
            To Drop Us An Email. Our Staff Always Be There To Help You Out. Do
            Not Hesitate!
          </p>
        </div>

        <div className="contact-content">
          {/* ===== LEFT SIDE - Contact Info ===== */}
          <div className="contact-info">
            <div className="info-item">
              <div className="icon">📍</div>
              <div>
                <h4>Address</h4>
                <p>
                  607 6th Paresa Tower, New
                  <br />
                  Shahra e Faisal, Karachi
                  <br />
                  Pakistan
                </p>
              </div>
            </div>

            <div className="info-item">
              <div className="icon">📞</div>
              <div>
                <h4>Phone</h4>
                <p>
                  Mobile: +(92) 123-45678
                  <br />
                  Phone: +(92) 456-6789
                </p>
              </div>
            </div>

            <div className="info-item">
              <div className="icon">🕒</div>
              <div>
                <h4>Working Time</h4>
                <p>
                  Monday-Friday: 3:00 - 6:00
                  <br />
                  Saturday-Sunday: Off 
                </p>
              </div>
            </div>
          </div>

          {/* ===== RIGHT SIDE - Form ===== */}
          <div className="contact-form">
            <form>
              <div className="form-group">
                <label>Your name</label>
                <input type="text" placeholder="shoaib" />
              </div>

              <div className="form-group">
                <label>Email address</label>
                <input type="email" placeholder="Abc@def.com" />
              </div>

              <div className="form-group">
                <label>Subject</label>
                <input type="text" placeholder="optional" />
              </div>

              <div className="form-group">
                <label>Message</label>
                <textarea
                  rows="5"
                  placeholder="Hi! My name is Shoaib"
                ></textarea>
              </div>

              <button type="submit" className="submit-btn">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactForm;