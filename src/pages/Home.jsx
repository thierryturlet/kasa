import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Banner from '../components/Banner'; 
import imgbanner from '../assets/imgbanner.svg';

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="stylebanner"
        style={{ 
          backgroundImage: `url(${imgbanner})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          width: '80%', 
          borderRadius: '25px' //
          
        }}
      >
      <Banner text="Chez vous, partout et ailleurs" />
      </div>
      <div className="main">
        <h1>Home</h1>
      </div>
      <Footer />
    </>
  );
};

export default Home;