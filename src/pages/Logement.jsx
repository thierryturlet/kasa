import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import data from "../data/logements.json";
import { useState } from "react";

const LogementPage = () => {
  const { id } = useParams();
  const logement = data.find((item) => item.id === id);
  const [currentIndex, setCurrentIndex] = useState(0); // Gérer le carrousel

  if (!logement) {
    return <p>Logement non trouvé</p>;
  }

  // Fonction pour changer l'image du carrousel
  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % logement.pictures.length);
  };

  const prevImage = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + logement.pictures.length) % logement.pictures.length
    );
  };

  return (
    <>
      <Navbar />
      

        {/* Carrousel d'images */}
        <div className="carousel">
          <button onClick={prevImage} className="prev">❮</button>
          <img src={logement.pictures[currentIndex]} alt={logement.title} />
          <button onClick={nextImage} className="next">❯</button>
        </div>
        <div className="logement-container">
        <h1>{logement.title}</h1>
        <p className="location">{logement.location}</p>

        

        {/* Affichage des tags */}
        <div className="tags">
          {logement.tags.map((tag, index) => (
            <span key={index} className="tag">{tag}</span>
          ))}
        </div>

        <p>{logement.description}</p>

        {/* Affichage de l'hôte */}
        <div className="host">
          <p>{logement.host.name}</p>
          <img src={logement.host.picture} alt={logement.host.name} />
        </div>

        {/* Affichage de la note */}
        <div className="rating">
          {"★".repeat(logement.rating).padEnd(5, "☆")}
        </div>

        {/* Affichage des équipements */}
        <div className="equipements">
          <h3>Équipements</h3>
          <ul>
            {logement.equipments.map((equipement, index) => (
              <li key={index}>{equipement}</li>
            ))}
          </ul>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default LogementPage;

