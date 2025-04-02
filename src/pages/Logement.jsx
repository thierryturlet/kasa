import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import data from "../data/logements.json";
import Slideshow from "../components/Slideshow.jsx";
import Collapse from "../components/Collapse";
import "../pages/logement.css";
import Rating from "../components/Rating.jsx";

const LogementPage = () => {
  const { id } = useParams();
  const logement = data.find((item) => item.id === id);

  return (
    <>
      <Navbar />

      <div className="logement-main">
        <Slideshow pictures={logement.pictures} title={logement.title} />

        <div className="style-location">
          <div className="info-location">
            <div className="logement-container">
              <h1>{logement.title}</h1>
              <p className="location">{logement.location}</p>
            </div>

            {/* Affichage des tags */}
            <div className="tags">
              {logement.tags.map((tag, index) => (
                <span key={index} className="tag">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Affichage de l'hôte */}
          <div className="info-owner">
            <div className="host">
              <p>{logement.host.name}</p>
              <div className="host-picture">
                <img src={logement.host.picture} alt={logement.host.name} />
              </div>
            </div>

            {/* Affichage de la note */}
            <Rating rating={logement.rating} />
          </div>
        </div>
        <div className="collapse-information">
          {/* Collapse pour la description */}

          <div className="logement">
          <Collapse title="Description" content={logement.description} />
          
          {/* Collapse pour les équipements */}
         
          <Collapse
            title="Équipements"
            content={
              <ul>
                {logement.equipments.map((equipement, index) => (
                  <li key={index}>{equipement}</li>
                ))}
              </ul>
            }
          />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default LogementPage;
