import React from "react";
import "./CheckoutForm.css";

function CheckoutForm() {
  return (
    <section className="checkout-section">
      <div className="checkout-container">

        {/* ===== LEFT SIDE ===== */}
        <div className="billing-details">
          <h2>Billing details</h2>

          <form>
          
            <div className="name-row">
              <div className="form-group">
                <label>First Name</label>
                <input type="text" />
              </div>
              <div className="form-group">
                <label>Last Name</label>
                <input type="text" />
              </div>
            </div>

            
            <div className="form-group">
              <label>Company Name (Optional)</label>
              <input type="text" />
            </div>

           
            <div className="form-group">
              <label>Country / Region</label>
              <select defaultValue="Sri Lanka">
                <option value="Sri Lanka">Sri Lanka</option>
                <option value="India">India</option>
                <option value="Pakistan">Pakistan</option>
                <option value="USA">USA</option>
              </select>
            </div>

        
            <div className="form-group">
              <label>Street address</label>
              <input type="text" />
            </div>

         
            <div className="form-group">
              <label>Town / City</label>
              <input type="text" />
            </div>

           
            <div className="form-group">
              <label>Province</label>
              <select defaultValue="Western Province">
                <option value="Western Province">Western Province</option>
                <option value="Central Province">Central Province</option>
                <option value="Southern Province">Southern Province</option>
                <option value="Northern Province">Northern Province</option>
              </select>
            </div>

         
            <div className="form-group">
              <label>ZIP code</label>
              <input type="text" />
            </div>

           
            <div className="form-group">
              <label>Phone</label>
              <input type="tel" />
            </div>

          
            <div className="form-group">
              <label>Email address</label>
              <input type="email" />
            </div>

           
            <div className="form-group">
              <label>Additional information</label>
              <textarea rows="4" placeholder="Additional information"></textarea>
            </div>
          </form>
        </div>

        {/* ===== RIGHT SIDE ===== */}
        <div className="order-summary">
          <div className="product-header">
            <span>Product</span>
            <span>Subtotal</span>
          </div>

          <div className="product-row">
            <span className="product-name">
              Asgaard sofa <span className="qty">x 1</span>
            </span>
            <span>Rs. 250,000.00</span>
          </div>

          <div className="summary-row">
            <span>Subtotal</span>
            <span>Rs. 250,000.00</span>
          </div>

          <div className="summary-row total-row">
            <span>Total</span>
            <span className="total-price">Rs. 250,000.00</span>
          </div>

          {/* Payment Methods */}
          <div className="payment-methods">
            <label className="payment-option">
              <input type="radio" name="payment" defaultChecked />
              <span>Direct Bank Transfer</span>
            </label>

            <p className="payment-note">
              Make your payment directly into our bank account. Please use your
              Order ID as the payment reference. Your order will not be shipped
              until the funds have cleared in our account.
            </p>

            <label className="payment-option">
              <input type="radio" name="payment" />
              <span>Direct Bank Transfer</span>
            </label>

            <label className="payment-option">
              <input type="radio" name="payment" />
              <span>Cash On Delivery</span>
            </label>
          </div>

          <p className="privacy-text">
            my name is Shoaib my name is Shoaib my name is Shoaib my name is Shoaib my name is Shoaib my name is Shoaib my name is Shoaib my name is Shoaib{" "}
            <a href="/privacy">privacy policy</a>.
          </p>

          <button className="place-order-btn">Place order</button>
        </div>
      </div>
    </section>
  );
}

export default CheckoutForm;