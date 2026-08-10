import React, { useState } from "react";
import "./ProductDetails.css";

function ProductDetails() {

  const [activeTab, setActiveTab] = useState("description");


  return (
    <section className="product-details">

      {/* Tabs */}

      <div className="tabs">

        <button
          className={
            activeTab === "description"
              ? "tab active"
              : "tab"
          }
          onClick={() => setActiveTab("description")}
        >
          Description
        </button>


        <button
          className={
            activeTab === "information"
              ? "tab active"
              : "tab"
          }
          onClick={() => setActiveTab("information")}
        >
          Additional Information
        </button>


        <button
          className={
            activeTab === "reviews"
              ? "tab active"
              : "tab"
          }
          onClick={() => setActiveTab("reviews")}
        >
          Reviews [5]
        </button>

      </div>


      {/* Description */}

      {activeTab === "description" && (

        <div className="description-content">

          <p>
            Embodying the raw, wayward spirit of rock ’n’ roll,
            the Kilburn portable active stereo speaker takes the
            unmistakable look and sound of Marshall, unplugged
            the chords, and takes the show on the road.
          </p>


          <p>
            Weighing in under 7 pounds, the Kilburn is a lightweight
            piece of vintage styled engineering. Setting the bar as
            one of the loudest speakers in its class, the Kilburn is
            a compact, stout-hearted hero with a well-balanced audio
            which boasts a clear midrange and extended highs.
          </p>


          <div className="description-images">

            <img
  src="/assets/images/SingleProduct/sofa.png"
  alt="sofa"
/>

            <img
  src="/assets/images/SingleProduct/sofa.png"
  alt="sofa"
/>

          </div>

        </div>

      )}


      {/* Additional Information */}

      {activeTab === "information" && (

        <div className="tab-content">

          <h3>Additional Information</h3>

          <p>
            Material: Premium Fabric
          </p>

          <p>
            Weight: 45 KG
          </p>

          <p>
            Size: Large
          </p>

        </div>

      )}


      {/* Reviews */}

      {activeTab === "reviews" && (

        <div className="tab-content">

          <h3>Customer Reviews</h3>

          <p>
            ⭐⭐⭐⭐⭐
          </p>

          <p>
            Excellent quality and very comfortable sofa.
          </p>

        </div>

      )}

    </section>
  );
}

export default ProductDetails;