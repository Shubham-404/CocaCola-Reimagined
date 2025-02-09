import React from 'react';
import "./styles/Products.css"

const Products = () => {
  return (
    <>
      {/* Container for the Main Content */}
      <div itemID="container">
        <h1>Refresh. &nbsp; Rethink. &nbsp; Recreate.</h1>
        <main>
          <div className="side product-card">
            <div className="details">
              <h4>About the brand</h4>
              <div className="product-icon"></div>
              <p>The Coca-Cola Company has been refreshing the world since 1886. With over 500 brands, we
                bring happiness in every sip.</p>

            </div>

          </div>

          <div className="middle">
            <div id="mid">
              <div id="can-box">
                <div className="can-cover"></div>
              </div>
              <img id="mid-rock" src="/images/base rock.png" alt="" />
            </div>
          </div>

          <div className="side contact-card">
            <div className="others">
              <h4>Product Details</h4>
              <div className="contact-icon"></div>
              <p><b>Name:</b> Coca Cola Classic</p>
              <p><b>Price:</b> $1.99</p>
              <p><b>Size:</b> 330ml</p>
              <img width="200" src="/images/barcode.png" alt="" />
              <br />
              <button className="buy-btn">Buy Now</button>


            </div>
          </div>
        </main>

        <section>
          <div className="side">

          </div>
          <div id="mid">

          </div>
          <div className="side">

          </div>
        </section>
      </div>
    </>
  );
};

export default Products;