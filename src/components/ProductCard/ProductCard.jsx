import { Link } from "react-router-dom";
import "./ProductCard.css";

function ProductCard({ product }) {
  return (
    <div className="product-card">

      <div className="product-image">

        <Link to={`/SingleProduct/${product.id}`}>
          <img
            src={product.image}
            alt={product.name}
          />
        </Link>

        {product.discount && (
          <span className="discount">
            {product.discount}
          </span>
        )}

        {product.new && (
          <span className="new">
            New
          </span>
        )}

      </div>

      <div className="product-info">

        <h3>{product.name}</h3>

        <p>{product.description}</p>

        <strong>
          Rp {product.price}
        </strong>

        {product.oldPrice && (
          <del>
            Rp {product.oldPrice}
          </del>
        )}

      </div>

    </div>
  );
}

export default ProductCard;