import React from "react";
import "./CartSidebar.css";
import { useNavigate } from "react-router-dom";

function CartSidebar({
  isOpen,
  onClose,
  cartItems,
  setCartItems
}) {

  const navigate = useNavigate();


  // Agar cart open nahi hai
  if (!isOpen) {
    return null;
  }


  // Remove product
  const removeItem = (id) => {

    const updatedItems = cartItems.filter(
      (item) => item.id !== id
    );

    setCartItems(updatedItems);
  };


  // Subtotal
  const subtotal = cartItems.reduce(
    (total, item) => {
      return total + item.price * item.quantity;
    },
    0
  );


  // Cart page open
  const openCartPage = () => {
    onClose();
    navigate("/cart");
  };


  // Checkout page open
  const openCheckoutPage = () => {
    onClose();
    navigate("/checkout");
  };


  return (

    <div className="cart-overlay">


      {/* Background */}

      <div
        className="cart-backdrop"
        onClick={onClose}
      ></div>


      {/* Sidebar */}

      <div className="cart-sidebar">


        {/* Header */}

        <div className="cart-header">

          <h2>
            Shopping Cart
          </h2>


          <button
            className="cart-close"
            onClick={onClose}
          >
            ×
          </button>

        </div>


        {/* Products */}

        <div className="cart-items">

          {cartItems.length === 0 ? (

            <div className="empty-cart">

              <p>
                Your cart is empty
              </p>

            </div>

          ) : (

            cartItems.map((item) => (

              <div
                className="cart-item"
                key={item.id}
              >


                {/* Image */}

                <div className="cart-item-image">

                  <img
                    src={item.image}
                    alt={item.name}
                  />

                </div>


                {/* Details */}

                <div className="cart-item-details">

                  <h3>
                    {item.name}
                  </h3>


                  <div className="cart-price">

                    <span>
                      {item.quantity}
                    </span>

                    <span>
                      ×
                    </span>

                    <strong>
                      Rs. {item.price.toLocaleString()}
                    </strong>

                  </div>

                </div>


                {/* Remove */}

                <button
                  className="remove-btn"
                  onClick={() => removeItem(item.id)}
                >
                  ×
                </button>

              </div>

            ))

          )}

        </div>


        {/* Bottom */}

        {cartItems.length > 0 && (

          <div className="cart-bottom">


            {/* Subtotal */}

            <div className="subtotal">

              <span>
                Subtotal
              </span>

              <strong>
                Rs. {subtotal.toLocaleString()}
              </strong>

            </div>


            {/* Buttons */}

            <div className="cart-actions">


              {/* Cart */}

              <button
                className="cart-btn"
                onClick={openCartPage}
              >
                Cart
              </button>


              {/* Checkout */}

              <button
                onClick={openCheckoutPage}
              >
                Checkout
              </button>


              {/* Comparison */}

              <button>
                Comparison
              </button>


            </div>

          </div>

        )}

      </div>

    </div>
  );
}

export default CartSidebar;