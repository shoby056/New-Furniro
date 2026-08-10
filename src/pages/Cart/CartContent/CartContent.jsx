
import React, { useState } from "react";
import "./CartContent.css";

const CartContent = () => {
  const [quantity, setQuantity] = useState(1);

  const price = 250000;
  const subtotal = price * quantity;

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const removeProduct = () => {
    setQuantity(0);
  };

  return (
    <div className="cart-section">

      <div className="cart-left">

        <div className="cart-header">
          <div>Product</div>
          <div>Price</div>
          <div>Quantity</div>
          <div>Subtotal</div>
        </div>

        {quantity > 0 ? (
          <div className="cart-product">

            <div className="cart-product-info">
              <div className="cart-product-image">
                <img
  src="/assets/images/Gallery/pic-3.png"
  alt="Asgaard sofa"
/>
              </div>

              <span className="cart-product-name">
                Asgaard sofa
              </span>
            </div>

            <div className="cart-price">
              Rs. 250,000.00
            </div>

            <div className="cart-quantity">
              <button onClick={decreaseQuantity}>
                −
              </button>

              <span>{quantity}</span>

              <button onClick={increaseQuantity}>
                +
              </button>
            </div>

            <div className="cart-subtotal">
              Rs. {subtotal.toLocaleString("en-US")}.00
            </div>

            <button
              className="cart-delete"
              onClick={removeProduct}
            >
              🗑
            </button>

          </div>
        ) : (
          <div className="empty-cart">
            Your cart is empty
          </div>
        )}

      </div>

      <div className="cart-totals">

        <h2>Cart Totals</h2>

        <div className="total-row">
          <span>Subtotal</span>

          <span className="subtotal-value">
            Rs. {subtotal.toLocaleString("en-US")}.00
          </span>
        </div>

        <div className="total-row total-main">
          <span>Total</span>

          <span>
            Rs. {subtotal.toLocaleString("en-US")}.00
          </span>
        </div>

        <button className="checkout-btn">
          Check Out
        </button>

      </div>

    </div>
  );
};

export default CartContent;

