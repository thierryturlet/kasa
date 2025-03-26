import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Banner from '../components/Banner';
import bannerabout from '../assets/bannerabout.png';

const About = () => {
  return (
    <>
      <Navbar />
      <Banner image={bannerabout}  />
       <div className="main">
        
      </div>
      <Footer opacity={0.3}  />
      
    </>
  );
};

export default About;