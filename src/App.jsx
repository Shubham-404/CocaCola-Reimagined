import React from 'react';
import Header from './Header';
import Nav from './Nav';
import Welcome from './Welcome';
import Products from './Products';
import Reviews from './Reviews';
import Footer from './Footer';

const App = () => {
  return (
    <>
      <Header />
      <main className='main'>
        <Nav />
        <Welcome />
        <Products />
        <Reviews />
      </main>
      <Footer />

    </>
  );
};

export default App;