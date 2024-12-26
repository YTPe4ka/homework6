import React from "react";
import "../styles/company.css";
import i from "../assets/img/Image1.png"
import m from "../assets/img/Image2.png"
import g from "../assets/img/Image3.png"

function Company() {
  return (
    <div className="company-page">
      <div className="company-content">
        <div className="company-text">
          <h1>Award-winning Company seen and used by millions around the world.</h1>
          <p>
            We are dedicated to delivering innovative solutions for your business. Our achievements 
            and commitment to excellence have gained recognition globally.
          </p>
        </div>
        <div className="company-gallery">
          <div className="gallery-item">
            <img src={i} alt="Team working" />
          </div>
          <div className="gallery-item">
            <img src={m} alt="Project meeting" />
          </div>
          <div className="gallery-item">
            <img src={g} alt="Innovation" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Company;
