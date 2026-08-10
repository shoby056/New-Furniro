
import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import CartContent from "./CartContent/CartContent";
import ShopHero from "../Shop/ShopHero/ShopHero";
import ShopFeatures from "../Shop/ShopFeatures/ShopFeatures";
import Footer from "../../components/Footer/Footer";

const Cart = () => {
  return (
    <>
      <Navbar />
      <ShopHero
  title="Cart"
  breadcrumb="Cart"
  showLogo={true}
/>
      <CartContent />
      <ShopFeatures />

      <Footer/>
    </>
  );
};

export default Cart;

