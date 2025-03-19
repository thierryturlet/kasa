import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/footer';

const Home = () => {
  return (
    <>
      <Navbar />
      
      <div className="home">
        <h1>Home</h1>
      </div>
      <Footer />
    </>
  );
};

export default Home;