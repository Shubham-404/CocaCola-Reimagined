import React from 'react';
import "./styles/Products.css"

const Products = () => {
  const mystyle = {
    background: `url("/CocaCola-Reimagined/images/coca\ cola.jpg") var(--left) 0px, url("/CocaCola-Reimagined/images/close-up-metallic-tin-can-removebg-preview.png")`,
    backgroundSize: `auto 100%`,
    /* opacity: .5; */
    width: `300px`,
    aspectRatio: `2/4.1`,
    backgroundBlendMode: `multiply`,
    // -webkit-mask-image: `url("/images/close-up-metallic-tin-can-removebg-preview.png")`;
    maskImage: `url("/CocaCola-Reimagined/images/close-up-metallic-tin-can-removebg-preview.png")`,
    // -webkit-mask-size: `auto 100%`;
    maskSize: `auto 100%`,
    transition: `1s`,
  };
  const mystyle2 = {
    background: `url("/CocaCola-Reimagined/images/sprite1.jpg") var(--left2) 0px, url("/CocaCola-Reimagined/images/close-up-metallic-tin-can-removebg-preview.png")`,
    backgroundSize: `auto 100%`,
    /* opacity: .5; */
    width: `300px`,
    aspectRatio: `2/4.1`,
    backgroundBlendMode: `multiply`,
    // -webkit-mask-image: `url("/images/close-up-metallic-tin-can-removebg-preview.png")`;
    maskImage: `url("/CocaCola-Reimagined/images/close-up-metallic-tin-can-removebg-preview.png")`,
    // -webkit-mask-size: `auto 100%`;
    maskSize: `auto 100%`,
    transition: `1s`,
  };
  return (
    <>
      {/* Container for the Main Content */}
      <div id="products" className=''>
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
                  <div className="can-cover hide" style={mystyle}></div>
                </div>
                <div id="can-box" className=''>
                  <div className="can-cover" style={mystyle2}></div>
                </div>
              </div>
              <img id="mid-rock" className='' src="/CocaCola-Reimagined/images/base rock.png" alt="" />
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
      </div >
    </>
  );
};

export default Products;