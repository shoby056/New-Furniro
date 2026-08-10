import React, { useState } from "react";
import "./SingleProduct.css";

import { useParams } from "react-router-dom";

import Navbar from "../../components/Navbar/Navbar";
import Breadcrumb from "./Breadcrumb/Breadcrumb";
import ProductGallery from "./ProductGallery/ProductGallery";
import ProductInformation from "./ProductInformation/ProductInformation";
import Products from "../../components/Products/Products";
import ProductDetails from "./ProductDetails/ProductDetails";
import Footer from "../../components/Footer/Footer";
import CartSidebar from "./CartSidebar/CartSidebar";

const SingleProduct = () => {

  // URL se product id lena
  const { id } = useParams();

  // Cart open / close
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Cart products
  const [cartItems, setCartItems] = useState([]);

  // =========================
  // PRODUCTS
  // =========================

  const products = [
    {
      id: 1,
      image: "/assets/images/Products/sytherline.png",
    },
    {
      id: 2,
      image: "/assets/images/Products/resper.png",
    },
    {
      id: 3,
      image: "/assets/images/Products/lolito.png",
    },
    {
      id: 4,
      image: "/assets/images/Products/resper.png",
    },
    {
      id: 5,
      image: "/assets/images/Products/grifo.png",
    },
    {
      id: 6,
      image: "/assets/images/Products/Muggo.png",
    },
    {
      id: 7,
      image: "/assets/images/Products/pingy.png",
    },
    {
      id: 8,
      image: "/assets/images/Products/potty.png",
    },
  ];

  // Current product find karo
  const currentProduct = products.find(
    (item) => item.id === Number(id)
  );

  // =========================
  // ADD TO CART
  // =========================

  const addToCart = (product) => {

    setCartItems((previousItems) => {

      // Check product already cart mein hai
      const existingProduct = previousItems.find(
        (item) => item.id === product.id
      );

      // Agar already hai
      if (existingProduct) {

        return previousItems.map((item) => {

          if (item.id === product.id) {

            return {
              ...item,
              quantity:
                item.quantity + product.quantity,
            };

          }

          return item;

        });

      }

      // New product
      return [
        ...previousItems,
        product,
      ];

    });

    // Cart open karo
    setIsCartOpen(true);
  };

  return (
    <>
      {/* =========================
          NAVBAR
      ========================= */}

      <Navbar
        onCartClick={() => {
          setIsCartOpen(true);
        }}
      />

      {/* =========================
          BREADCRUMB
      ========================= */}

      <Breadcrumb />

      {/* =========================
          SINGLE PRODUCT
      ========================= */}

      <section className="single-product">

        {/* Product Image */}

        <div className="product-left">

          <ProductGallery
            productId={id}
          />

        </div>

        {/* Product Information */}

        <div className="product-right">

          <ProductInformation
            productId={id}
            productImage={currentProduct?.image}
            onAddToCart={addToCart}
          />

        </div>

      </section>

      {/* =========================
          PRODUCT DETAILS
      ========================= */}

      <ProductDetails />

      {/* =========================
          RELATED PRODUCTS
      ========================= */}

      <Products
        heading="Related Products"
        showButton={false}
      />

      {/* =========================
          FOOTER
      ========================= */}

      <Footer />

      {/* =========================
          CART SIDEBAR
      ========================= */}

      <CartSidebar
        isOpen={isCartOpen}

        onClose={() => {
          setIsCartOpen(false);
        }}

        cartItems={cartItems}

        setCartItems={setCartItems}
      />

    </>
  );
};

export default SingleProduct;