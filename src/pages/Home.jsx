import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Banner from '../components/Banner'; 
import imgbanner from '../assets/imgbanner.png';
import Homecards from '../components/Homecards';
import logements from '../data/logements.json';
console.log(logements);


const Home = () => {
  return (
    <>
      <Navbar />
      <Banner text="Chez vous, partout et ailleurs" image={imgbanner} />
      
      <div className="main">
        <h1>Home</h1>
      
        
        <Homecards />
        </div>
      
      <Footer />
    </>
  );
};

export default Home;
