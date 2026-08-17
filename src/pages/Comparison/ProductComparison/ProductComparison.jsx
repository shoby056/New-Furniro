import React from "react";
import "./ProductComparison.css";

const products = [
  {
    image: "/assets/images/Comparison/Asgaard.png",
    name: "Asgaard Sofa",
    price: "Rs. 250,000.00",
    rating: "4.7",
    reviews: "204 Review",
  },
  {
    image: "/assets/images/Comparison/outdoor.png",
    name: "Outdoor Sofa Set",
    price: "Rs. 224,000.00",
    rating: "4.2",
    reviews: "145 Review",
  },
];

const comparisonData = [
  {
    title: "General",
    rows: [
      ["Sales Package", "1 sectional sofa", "1 Three Seater, 2 Single Seater"],
      ["Model Number", "TFCBLIGRBL6SRHS", "DTUBIGLRBL568"],
      ["Secondary Material", "Solid Wood", "Solid Wood"],
      ["Configuration", "L-shaped", "L-shaped"],
      ["Upholstery Material", "Fabric + Cotton", "Fabric + Cotton"],
      ["Upholstery Color", "Bright Grey & Lion", "Bright Grey & Lion"],
    ],
  },
  {
    title: "Product",
    rows: [
      ["Filling Material", "Foam", "Matte"],
      ["Finish Type", "Bright Grey & Lion", "Bright Grey & Lion"],
      ["Adjustable Headrest", "No", "yes"],
      ["Maximum Load Capacity", "280 KG", "300 KG"],
      ["Origin of Manufacture", "India", "India"],
    ],
  },
  {
    title: "Dimensions",
    rows: [
      ["Width", "265.32 cm", "265.32 cm"],
      ["Height", "76 cm", "76 cm"],
      ["Depth", "167.76 cm", "167.76 cm"],
      ["Weight", "45 KG", "65 KG"],
      ["Seat Height", "41.52 cm", "41.52 cm"],
      ["Leg Height", "5.46 cm", "5.46 cm"],
    ],
  },
  {
    title: "Warranty",
    rows: [
      ["Warranty Summary", "1 Year Manufacturing Warranty", "1.2 Year Manufacturing Warranty"],
      [
        "Warranty Service Type",
        "For Warranty Claims or Any Product Related Issues Please Email at operations@treviniture.com",
        "For Warranty Claims or Any Product Related Issues Please Email at support@xyz.com",
      ],
      [
        "Covered in Warranty",
        "Warranty Against Manufacturing Defect",
        "Warranty of the product is limited to manufacturing defects only.",
      ],
      [
        "Not Covered in Warranty",
        "The Warranty Does Not Cover Damages Due To Usage Of The Product Beyond Its Intended Use And Wear & Tear In The Natural Course Of Product Usage.",
        "The Warranty Does Not Cover Damages Due To Usage Of The Product Beyond Its Intended Use And Wear & Tear In The Natural Course Of Product Usage.",
      ],
      ["Domestic Warranty", "1 Year", "3 Months"],
    ],
  },
];

function ProductComparison() {
  return (
    <section className="comparison-section">

      {/* PRODUCT TOP AREA */}
      <div className="comparison-top">

        <div className="comparison-info">
          <h2>
            Go to Product
            <br />
            page for more
            <br />
            Products
          </h2>

          <button>View More</button>
        </div>

        {products.map((product, index) => (
          <div className="comparison-product" key={index}>

            <div className="comparison-image">
              <img src={product.image} alt={product.name} />
            </div>

            <h3>{product.name}</h3>

            <p className="comparison-price">
              {product.price}
            </p>

            <div className="comparison-rating">
              <span>{product.rating}</span>

              <span className="stars">
                ★ ★ ★ ★ ★
              </span>

              <span className="reviews">
                | {product.reviews}
              </span>
            </div>

          </div>
        ))}

        {/* ADD PRODUCT */}
        <div className="add-product">

          <h3>Add A Product</h3>

          <select>
            <option>Choose a Product</option>
            <option>Modern Sofa</option>
            <option>Dining Table</option>
            <option>Outdoor Sofa</option>
          </select>

        </div>

      </div>


      {/* COMPARISON TABLE */}
      <div className="comparison-table">

        {comparisonData.map((section, sectionIndex) => (
          <div className="comparison-group" key={sectionIndex}>

            <div className="comparison-heading">
              {section.title}
            </div>

            {section.rows.map((row, rowIndex) => (
              <div className="comparison-row" key={rowIndex}>

                <div className="comparison-label">
                  {row[0]}
                </div>

                <div className="comparison-value">
                  {row[1]}
                </div>

                <div className="comparison-value">
                  {row[2]}
                </div>

              </div>
            ))}

          </div>
        ))}

        {/* ADD TO CART */}
        <div className="comparison-cart-row">

          <div></div>

          <button>Add To Cart</button>

          <button>Add To Cart</button>

        </div>

      </div>

    </section>
  );
}

export default ProductComparison;