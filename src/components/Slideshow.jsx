import { useState } from "react";
import "../components/Slideshow.jsx"; 
import "../components/Slideshow.css";

const Slideshow = ({ pictures, title }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % pictures.length);
  };

  const prevImage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + pictures.length) % pictures.length
    );
  };

  return (
    <div className="slideshow">
      {/* Bouton précédent avec SVG (affiché seulement si plus d'une image) */}
      {pictures.length > 1 && (
        <button onClick={prevImage} className="prev">
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40">
            <path d="M15.293 3.293 6.586 12l8.707 8.707 1.414-1.414L9.414 12l7.293-7.293-1.414-1.414z" />
          </svg>
        </button>
      )}

      {/* Image principale */}
      <div className="slideshow-image-container">
      <img src={pictures[currentIndex]} alt={title}  className="slideshow-image" />
      </div>

      {/* Bouton suivant avec SVG (affiché seulement si plus d'une image) */}
      {pictures.length > 1 && (
        <button onClick={nextImage} className="next">
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40">
            <path d="M7.293 4.707 14.586 12l-7.293 7.293 1.414 1.414L17.414 12 8.707 3.293 7.293 4.707z" />
          </svg>
        </button>
      )}

      {/* Affichage de l'index seulement si plus d'une image */}
      {pictures.length > 1 && (
        <div className="image-index">
          {currentIndex + 1} / {pictures.length}
        </div>
      )}
    </div>
  );
};

export default Slideshow;
