import React from "react";
import "../styles/contact.css";
import img from "../assets/img/images.png"


function Contact() {
  return (
    <div className="contact-page">
      <div className="contact-header">
        <h1>We hired people who are Always <br /> Passionate about what they do</h1>
        <p>
          Our team is dedicated to achieving excellence,<br /> driven by passion, and committed to delivering the best solutions for your needs.
        </p>
      </div>
      <div className="contact-image">
        <img src={img} alt="Team working passionately" />
      </div>
    </div>
  );
}

export default Contact;
