import React from "react";
import "../styles/home.css";
import img from "../assets/img/Image.png"
function Home() {
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
          <img
            src={img}
            alt="Team working together"
          />
        </div>
      </header>
    </div>
  );
}

export default Home;
