import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../pages/NotFound.css"; 

const Error404 = () => {
  return (
    <div className="page-container">
      <Navbar />
      <div className="main-content">
        <div className="error-container">
          <h1 className="error-code">404</h1>
          <p className="error-message">Oups ! La page que vous demandez n'existe pas.</p>
          <Link to="/" className="error-link">Retourner sur la page d'accueil</Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Error404;


