import React from "react";
import Nav from './Nav';
import "./styles/Welcome.css"

const Welcome = () => {
  return (
    <>
      <section id="welcome" className="">
          <div className="welcome-sub">
            <div className="welcome-content">
              <h1 className="welcome-text">Refresh with a Drink! 🥤</h1>
              <p>Experience the ultimate taste of happiness.</p>
              <button id="explore-btn">Explore Products</button>
            </div>

          </div>
      </section>
    </>
  );
};

export default Welcome;
