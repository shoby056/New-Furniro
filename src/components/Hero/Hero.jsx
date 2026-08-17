import "./Hero.css";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="hero" id="home">

      <img
        src="/assets/images/Hero_Background.png"
        alt="Furniture"
      />

      <div className="hero-content">

        <p>New Arrival</p>

        <h1>
          Discover Our
          <br />
          New Collection
        </h1>

        <p className="hero-text">
          Lorem ipsum dolor sit amet,
          consectetur adipiscing elit.
          Ut elit tellus.
        </p>

       <Link to="/Shop">
  <button>
    BUY NOW
  </button>
</Link>

      </div>

    </section>
  );
}

export default Hero;