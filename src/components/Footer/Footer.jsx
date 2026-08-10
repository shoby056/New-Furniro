import "./Footer.css";

function Footer() {

  return (

    <footer className="footer" id="contact">

      <div className="footer-container">

        <div className="footer-about">

          <h2>Funiro.</h2>

          <p>
            400 University Drive Suite 200 Coral Gables,
            FL 33134 USA
          </p>

        </div>

        <div className="footer-links">

          <h4>Links</h4>

          <a href="#home">Home</a>
          <a href="#shop">Shop</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>

        </div>

        <div className="footer-help">

          <h4>Help</h4>

          <a href="#">Payment Options</a>
          <a href="#">Returns</a>
          <a href="#">Privacy Policies</a>

        </div>

        <div className="newsletter">

          <h4>Newsletter</h4>

          <div className="newsletter-input">

            <input
              type="email"
              placeholder="Enter Your Email Address"
            />

            <button>
              SUBSCRIBE
            </button>

          </div>

        </div>

      </div>

      <div className="copyright">

        2026 funiro. All rights reserved

      </div>

    </footer>
  );
}

export default Footer;