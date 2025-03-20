import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Banner from '../components/Banner'; 
import imgbanner from '../assets/imgbanner.png';

const Home = () => {
  return (
    <>
      <Navbar />
 
      <Banner text="Chez vous, partout et ailleurs" image={imgbanner} />
      
      <div className="main">
        <h1>Home</h1>
      </div>
      <Footer opacity={0.6} />
    </>
  );
};

export default Home;