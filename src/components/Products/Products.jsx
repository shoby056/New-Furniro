import { useState } from "react";
import ProductCard from "../ProductCard/ProductCard";
import "./Products.css";
function Products({ showHeading = true, showButton = true }) {
  const [showMore, setShowMore] = useState(false);
  

const products = [
  {
    id: 1,
    name: "Syltherine",
    description: "Stylish cafe chair",
    price: "2.500.000",
    oldPrice: "3.500.000",
    discount: "-30%",
    image: "/assets/images/Products/sytherline.png",
  },

  {
    id: 2,
    name: "resper",
    description: "Stylish cafe chair",
    price: "2.500.000",
    image: "/assets/images/Products/resper.png",
  },

  {
    id: 3,
    name: "Lolito",
    description: "Luxury big sofa",
    price: "7.000.000",
    oldPrice: "14.000.000",
    discount: "-50%",
    image: "/assets/images/Products/lolito.png",
  },

  {
    id: 4,
    name: "Respira",
    description: "Outdoor bar table",
    price: "500.000",
    new: true,
    image: "/assets/images/Products/resper.png",
  },

  {
    id: 5,
    name: "Grifo",
    description: "Night lamp",
    price: "1.500.000",
    image: "/assets/images/Products/grifo.png",
  },

  {
    id: 6,
    name: "Muggo",
    description: "Small mug",
    price: "150.000",
    new: true,
    image: "/assets/images/Products/Muggo.png",
  },

  {
    id: 7,
    name: "Pingky",
    description: "Cute bed set",
    price: "7.000.000",
    oldPrice: "14.000.000",
    discount: "-50%",
    image: "/assets/images/Products/pingy.png",
  },

  {
    id: 8,
    name: "Potty",
    description: "Minimalist flower pot",
    price: "500.000",
    new: true,
    image: "/assets/images/Products/potty.png",
  },
];

  return (
    <section className="products" id="shop">

     {showHeading && <h2>Our Products</h2>}

      <div className="product-container">

        {products
          .slice(0, showMore ? products.length : 4)
          .map((product) => (
            <ProductCard
              key={product.name}
              product={product}
            />
          ))}

      </div>

            {showButton && (
        <button
          className="show-button"
          onClick={() => setShowMore(!showMore)}
        >
          {showMore ? "Show Less" : "Show More"}
        </button>
      )}


    </section>
  );
}

export default Products;