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
        <h1>About</h1>
      </div>
      <Footer opacity={0.3}  />
      
    </>
  );
};

export default About;