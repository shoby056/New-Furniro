import React from "react";
import { Link } from "react-router-dom";
import "./ShopHero.css";

function ShopHero({
  title = "Shop",
  breadcrumb = "Shop",
  showLogo = false,
}) {
  return (
    <section className="shop-hero">

      <div className="shop-hero-content">

        {showLogo && (
          <img
            src="/assets/icons/Header_Logo.png"
            alt="Logo"
            className="cart-hero-logo"
          />
        )}

        <h1>{title}</h1>

        <div className="breadcrumb">
          <Link to="/">
            Home
          </Link>

          <span>›</span>

          <span>{breadcrumb}</span>
        </div>

      </div>

    </section>
  );
}

export default ShopHero;