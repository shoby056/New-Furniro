import React from "react";
import "./ShopFeatures.css";

function ShopFeatures() {
  const features = [
    {
      icon: "♜",
      title: "High Quality",
      text: "crafted from top materials",
    },
    {
      icon: "◉",
      title: "Warranty Protection",
      text: "Over 2 years",
    },
    {
      icon: "▣",
      title: "Free Shipping",
      text: "Order over 150 $",
    },
    {
      icon: "♧",
      title: "24 / 7 Support",
      text: "Dedicated support",
    },
  ];

  return (
    <section className="features">

      {features.map((feature, index) => (

        <div
          className="feature-item"
          key={index}
        >

          <div className="feature-icon">
            {feature.icon}
          </div>

          <div>
            <h3>
              {feature.title}
            </h3>

            <p>
              {feature.text}
            </p>
          </div>

        </div>

      ))}

    </section>
  );
}

export default ShopFeatures;