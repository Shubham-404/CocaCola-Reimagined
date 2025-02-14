import React from "react";
import "./styles/Reviews.css";

const Reviews = () => {
  return (
    <>
      <div id="reviews"  className="reviews">

        <section className="reviews-section">
          <h2>What Our Customers Say</h2>
          <span className="span">We have a lovely consumer community and customer support. Our products have been the first choice of people for several years. Here are some of the thoughts of our trusted customers, about The CocaCola products.</span>
          <div className="reviews-container">
            <div className="review-card">
              <p className="review-text">
                "Coca Cola Classic is my favorite drink – it always refreshes my day!"
              </p>
              <div className="reviewer">
                <img
                  className="reviewer-avatar"
                  src="/CocaCola-Reimagined/images/avatar1.jpg"
                  alt="John Doe"
                />
                <span className="reviewer-name">John Doe</span>
              </div>
            </div>
            <div className="review-card">
              <p className="review-text">
                "I love the new twist on the classic taste. Bold and refreshing!"
              </p>
              <div className="reviewer">
                <img
                  className="reviewer-avatar"
                  src="/CocaCola-Reimagined/images/avatar3.jpg"
                  alt="Jane Smith"
                />
                <span className="reviewer-name">Jane Smith</span>
              </div>
            </div>
            <div className="review-card">
              <p className="review-text">
                "The perfect balance of tradition and modern flair. Coca Cola has
                done it again!"
              </p>
              <div className="reviewer">
                <img
                  className="reviewer-avatar"
                  src="/CocaCola-Reimagined/images/avatar2.jpg"
                  alt="Sam Wilson"
                />
                <span className="reviewer-name">Sam Wilson</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Reviews;
