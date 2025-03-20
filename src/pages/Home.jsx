import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Banner from '../components/Banner'; 
const Home = () => {
  return (
    <>
      <Navbar />
      <Banner/>
      <div className="main">
        <h1>Home</h1>
      </div>
      <Footer />
    </>
  );
};

export default Home;