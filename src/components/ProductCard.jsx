import React from "react";
import "../styles/productCard.css";

function ProductCard({ product, onClick }) {
  return (
    <div className="product-card" onClick={onClick}>
      <img src={product.thumbnail} alt={product.title} />
      <h3>{product.title}</h3>
      <p>Price: ${product.price}</p>
    </div>
  );
}

export default ProductCard;
