import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Banner from '../components/Banner'; 
import imgbanner from '../assets/imgbanner.png';
import Card from '../components/Card';

const Home = () => {
  return (
    <>
      <Navbar />
      <Banner text="Chez vous, partout et ailleurs" image={imgbanner} />
      
      <div className="main">
        <h1>Home</h1>
      

        <div className="cards-container">
          <Card text="titre de la location" />
          <Card text="titre de la location" />
          <Card text="titre de la location" />
          <Card text="titre de la location" />
          <Card text="titre de la location" />
          <Card text="titre de la location" />
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Home;
