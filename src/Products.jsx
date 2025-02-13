import React from 'react';
import "./styles/Products.css"

const Products = () => {
  return (
    <>
      {/* Container for the Main Content */}
      <div id="products">
        <div className="container">
          <h1>Refresh. &nbsp; Rethink. &nbsp; Recreate.</h1>

          <div className="product-data">
            <div className="product-card">
              <div className="details">
                <h4>About the brand</h4>
                <div className="product-icon"></div>
                <p>The Coca-Cola Company has been refreshing the world since 1886. With over 500 brands, we
                  bring happiness in every sip.</p>
              </div>
            </div>

            <div className="middle">
              <div id="mid" className=''>
                <div id="can-box" className=''>
                  <div className="can-cover "></div>
                </div>
                <img id="mid-rock" className='' src="/CocaCola-Reimagined/images/base rock.png" alt="" />
              </div>
            </div>

            <div className="product-card">
              <div className="details">
                <h4>Product Details</h4>
                <div className="contact-icon"></div>
                <p><b>Name:</b> Coca Cola Classic</p>
                <p><b>Price:</b> $1.99</p>
                <p><b>Size:</b> 330ml</p>
                <img className='barcode' width="200" src="/CocaCola-Reimagined/images/barcode.png" alt="" />
                <br />
                <button id="explore-btn" className="buy-btn">Buy Now</button>
              </div>
            </div>

          </div>
          <div className="navigate">
            <div className="arrow left-arrow">
              <img height={20} src="/CocaCola-Reimagined/images/next-right-arrow-svgrepo-com.svg" alt="NotFound" />
            </div>
            <div className="arrow">
              <img height={20} src="/CocaCola-Reimagined/images/next-right-arrow-svgrepo-com.svg" alt="NotFound" />
              </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;