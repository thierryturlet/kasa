import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Banner from '../components/Banner';
const About = () => {
  return (
    <>
      <Navbar />
      <Banner />
       <div className="main">
        <h1>About</h1>
      </div>
      <Footer />
      
    </>
  );
};

export default About;