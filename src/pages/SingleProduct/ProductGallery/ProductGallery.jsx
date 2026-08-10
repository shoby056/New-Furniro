import React, { useState } from "react";
import "./ProductGallery.css";

function ProductGallery({ productId }) {

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

  const product = products.find(
    (item) => item.id === Number(productId)
  );

  const images = [
    product?.image,
    "/assets/images/Gallery/pic-5.png",
    "/assets/images/Gallery/pic-3.png",
    "/assets/images/Gallery/pic-6.png",
    "/assets/images/Gallery/pic-4.png",
  ];

  const [selectedImage, setSelectedImage] = useState(
    images[0]
  );

  return (
    <div className="product-gallery">

      {/* Thumbnails */}

      <div className="thumbnail-list">

        {images.map((image, index) => (
          <button
            key={index}
            className="thumbnail-btn"
            onClick={() => setSelectedImage(image)}
          >
            <img
              src={image}
              alt="product"
            />
          </button>
        ))}

      </div>

      {/* Main Image */}

      <div className="main-product-image">

        <img
          src={selectedImage}
          alt="product"
        />

      </div>

    </div>
  );
}

export default ProductGallery;