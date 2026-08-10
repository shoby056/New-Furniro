import React, { useState } from "react";
import "./Inspirations.css";

const slides = [
  {
    id: 1,
    number: "01",
    category: "Bed Room",
    title: "Inner Peace",
    image: "./assets/images/Inspirations/image-1.png",
  },
  {
    id: 2,
    number: "02",
    category: "Dining Room",
    title: "Natural Light",
    image: "./assets/images/Inspirations/image-2.png",
  },
  {
    id: 3,
    number: "03",
    category: "Living Room",
    title: "Soft Moments",
    image: "./assets/images/Inspirations/image-1.png",
  },
  {
    id: 4,
    number: "04",
    category: "Kitchen",
    title: "Warm Space",
   image: "./assets/images/Inspirations/image-2.png",
  },
];

export default function Inspirations() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrent(index);
  };

  const currentSlide = slides[current];
  const nextSlideData = slides[(current + 1) % slides.length];

  return (
    <section className="room-section">
      <div className="room-container">
        {/* Left Content */}
        <div className="left-content">
          <h1>
            50+ Beautiful rooms
            <br />
            inspiration
          </h1>
          <p>
            Our designer already made a lot of beautiful
            <br />
            prototipe of rooms that inspire you
          </p>
          <button className="explore-btn">Explore More</button>
        </div>

        {/* Right Side - Carousel */}
        <div className="carousel-wrapper">
          <div className="images-row">
            {/* Main (Active) Image */}
            <div
              className="slide main-slide"
              style={{ backgroundImage: `url(${currentSlide.image})` }}
            >
              <div className="slide-info">
                <div className="slide-meta">
                  <span className="number">{currentSlide.number}</span>
                  <span className="line"></span>
                  <span className="category">{currentSlide.category}</span>
                </div>
                <div className="slide-title-row">
                  <h3>{currentSlide.title}</h3>
                  <button className="arrow-btn" onClick={nextSlide}>
                    →
                  </button>
                </div>
              </div>
            </div>

            {/* Side (Next) Image */}
            <div
              className="slide side-slide"
              style={{ backgroundImage: `url(${nextSlideData.image})` }}
            ></div>
          </div>

          {/* Next Button */}
          <button className="nav-next" onClick={nextSlide} aria-label="Next">
            ›
          </button>

          {/* Dots */}
          <div className="dots">
            {slides.map((_, index) => (
              <button
                key={index}
                className={`dot ${index === current ? "active" : ""}`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}