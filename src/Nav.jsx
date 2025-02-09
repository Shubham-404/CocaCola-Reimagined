import { useState, useEffect, React } from "react";
import "./styles/Nav.css";

const Nav = () => {

  return (
    <>
      <nav>
        <ul className=''>
          <li className='nav-li '><a className='' href='#welcome'>Home</a></li>
          <li className='nav-li '><a className='' href='#products'>Explore Products</a></li>
          <li className='nav-li '><a className='' href='#reviews'>Reviews</a></li>
          <li className='nav-li '><a className='' href='#reviews'>Partners</a></li>

        </ul>
      </nav>

    </>
  );
};

export default Nav;