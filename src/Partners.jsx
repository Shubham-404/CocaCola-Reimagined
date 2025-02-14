import React from "react";
import "./styles/Partners.css";

const Partners = () => {
  return (
    <section id="partners" className="partners-section">
      <h2>Our Trusted Partners</h2>
      <div className="partners-container">
        <div className="partner-card">
          <img
            src="/CocaCola-Reimagined/images/partner1.png"
            alt="Partner 1"
            className="partner-logo"
          />
        </div>
        <div className="partner-card">
          <img
            src="/CocaCola-Reimagined/images/partner2.png"
            alt="Partner 2"
            className="partner-logo"
          />
        </div>
        <div className="partner-card">
          <img
            src="/CocaCola-Reimagined/images/partner3.png"
            alt="Partner 3"
            className="partner-logo"
          />
        </div>
        <div className="partner-card">
          <img
            src="/CocaCola-Reimagined/images/partner4.png"
            alt="Partner 4"
            className="partner-logo"
          />
        </div>
      </div>
    </section>
  );
};

export default Partners;
