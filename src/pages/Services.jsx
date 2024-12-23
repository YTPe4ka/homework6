import React from "react";
import "../styles/services.css";

function OurServices() {
  return (
    <div className="services-page">
      <section className="services-section">
        <div className="services-layout">
          <div className="services-left">
            <h1>We Build Software Solution that Solve Clients Business Challenges</h1>
            <p>
              Our professional team provides outstanding services tailored to your
              needs. We focus on delivering high-quality results for our clients.
            </p>
            <button className="quote-button">Request Quote →</button>
          </div>
          <div className="services-right">
            <ul>
              <li>Technical support</li>
              <li>Development</li>
              <li>AWS/Azure</li>
              <li>Consulting</li>
              <li>Information Technology</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

export default OurServices;
