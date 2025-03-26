import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import data from "../data/logements.json";
import Slideshow from "../components/Slideshow.jsx";

const LogementPage = () => {
  const { id } = useParams();
  const logement = data.find((item) => item.id === id);


 


  return (
    <>
      <Navbar />
      
      <Slideshow pictures={logement.pictures} title={logement.title} />
   
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

