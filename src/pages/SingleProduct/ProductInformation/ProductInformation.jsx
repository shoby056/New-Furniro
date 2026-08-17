import React, { useState } from "react";
import "./ProductInformation.css";
import { useNavigate } from "react-router-dom";

const ProductInformation = ({
  productId,
  productImage,
  onAddToCart,
}) => {
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState("L");

  const navigate = useNavigate();

  // =========================
  // QUANTITY
  // =========================

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  // =========================
  // ADD TO CART
  // =========================

  const handleAddToCart = () => {
    const product = {
      id: Number(productId),
      name: "Asgaard sofa",
      price: 250000,
      quantity: quantity,
      image: productImage,
      size: size,
    };

    onAddToCart(product);
  };

  // =========================
  // COMPARISON PAGE
  // =========================

  const openComparisonPage = () => {
    navigate("/comparison");
  };

  return (
    <div>

      <h1>
        Asgaard sofa
      </h1>

      <div className="product-price">
        Rs. 250,000.00
      </div>

      {/* Rating */}

      <div className="rating-row">

        <div className="stars">
          ★★★★★
        </div>

        <span className="rating-divider">
          |
        </span>

        <span>
          5 Customer Review
        </span>

      </div>

      {/* Description */}

      <p className="product-description">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit exercitationem, amet saepe ducimus obcaecati ratione ipsa, reiciendis voluptatibus quod ullam accusantium ipsam enim autem, omnis nesciunt. Ipsum totam at odit!.
      </p>

      {/* Size */}

      <div className="option-title">
        Size
      </div>

      <div className="size-options">

        {["L", "XL", "XS"].map((item) => (
          <button
            type="button"
            key={item}
            className={
              size === item
                ? "size-btn active"
                : "size-btn"
            }
            onClick={() => setSize(item)}
          >
            {item}
          </button>
        ))}

      </div>

      {/* Color */}

      <div className="option-title color-title">
        Color
      </div>

      <div className="color-options">

        <button
          type="button"
          className="color purple"
        ></button>

        <button
          type="button"
          className="color black"
        ></button>

        <button
          type="button"
          className="color gold"
        ></button>

      </div>

      {/* Cart Actions */}

      <div className="cart-actions">

        {/* Quantity */}

        <div className="quantity-box">

          <button
            type="button"
            onClick={decreaseQuantity}
          >
            -
          </button>

          <span>
            {quantity}
          </span>

          <button
            type="button"
            onClick={increaseQuantity}
          >
            +
          </button>

        </div>

        {/* Add To Cart */}

        <button
          type="button"
          className="add-cart-btn"
          onClick={handleAddToCart}
        >
          Add To Cart
        </button>

        {/* Compare */}

        <button
          type="button"
          className="compare-btn"
          onClick={openComparisonPage}
        >
          + &nbsp; Compare
        </button>

      </div>

      {/* Product Meta */}

      <div className="product-meta">

        <p>
          <span>SKU</span>
          : SS001
        </p>

        <p>
          <span>Category</span>
          : Sofas
        </p>

        <p>
          <span>Tags</span>
          : Sofa, Chair, Home, Shop
        </p>

        <p>
          <span>Share</span>
          :
          <b> f </b>
          <b> in </b>
          <b> 🐦 </b>
        </p>

      </div>

    </div>
  );
};

export default ProductInformation;