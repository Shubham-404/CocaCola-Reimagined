import React from 'react';
import Header from './Header';
import Nav from './Nav';
import Welcome from './Welcome';
import Products from './Products';
import Partners from './Partners';
import Reviews from './Reviews';
import Footer from './Footer';

const App = () => {
  return (
    <>
      <Header />
      <main id='main' className='main'>
        <Nav />
        <Welcome />
        <Products />
        <Reviews />
        <Partners/>
      </main>
      <Footer />

    </>
  );
};

export default App;