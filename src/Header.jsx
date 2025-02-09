import React from 'react';
import "./styles/Header.css";
import Nav from './Nav';

const Header = () => {
    return (
        <>
            <header className='' >
                {/* Infinite Scrolling Text */}
                <div className="marquee">
                    <div className='marquee-content'>
                        <span className='head-tag'>
                            <img height="40" src="/images/Coke-company-logo-black.svg" alt="" />
                        </span>
                        <span>&nbsp;•&nbsp; </span>
                        <span className='head-tag'>
                            <img height="40" src="/images/Coke-company-logo-black.svg" alt="" />
                        </span>
                        <span>&nbsp;•&nbsp; </span>
                        <span className='head-tag'>
                            <img height="40" src="/images/Coke-company-logo-black.svg" alt="" />
                        </span>
                        

                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;