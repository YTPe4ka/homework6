import React, { useState, useEffect } from "react";
import "../styles/home.css";
import img from "../assets/img/Image.png";
import ProductCard from "../components/ProductCard";

function Home() {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data.products))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  const handleCardClick = (product) => {
    setSelectedProduct(product);
  };

  const closePopup = () => {
    setSelectedProduct(null);
  };

  return (
    <div className="home-page">
      <header className="hero-section">
        <div className="hero-text">
          <h1>Transform Your Idea Into Reality with Finsweet</h1>
          <p>
            The entire Finsweet team knows what's good with Webflow and you can
            too with 1 week and a good attitude.
          </p>
          <button className="quote-button">Request Quote →</button>
        </div>
        <div className="hero-image">
          <img src={img} alt="Team working together" />
        </div>
      </header>

      <section className="product-section">
        <h2>Our Products</h2>
        <div className="product-grid">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onClick={() => handleCardClick(product)}
            />
          ))}
        </div>
      </section>

      {selectedProduct && (
        <div className="popup">
          <div className="popup-content">
            <h3>{selectedProduct.title}</h3>
<br />  
            <p>{selectedProduct.description}</p>
<br />
            <p>Price: ${selectedProduct.price}</p>
            <button onClick={closePopup} className="close-popup">
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
