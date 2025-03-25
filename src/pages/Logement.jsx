import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useParams } from 'react-router-dom'
import data from "../data/logements.json";

const LogementPage = () => {
  const { id } = useParams(); // Récupère l'ID dans l'URL
  const logement = data.find(item => item.id === id); // Cherche le bon logement

  

  return (
    <>
      <Navbar />
      <div className="logement-container">
        <h1>{logement.title}</h1>
        <img src={logement.cover} alt={logement.title} />
        <p>{logement.description}</p>
      </div>
      <Footer />
    </>
  );
};

export default LogementPage;
