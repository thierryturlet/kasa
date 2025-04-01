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
          <svg
            width="48"
            height="80"
            viewBox="0 0 48 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M47.04 7.78312L39.92 0.703125L0.359985 40.3031L39.96 79.9031L47.04 72.8231L14.52 40.3031L47.04 7.78312Z"
              fill="white"
            />
          </svg>
        </button>
      )}

      {/* Image principale */}
      <div className="slideshow-image-container">
        <img
          src={pictures[currentIndex]}
          alt={title}
          className="slideshow-image"
        />
      </div>

      {/* Bouton suivant avec SVG (affiché seulement si plus d'une image) */}
      {pictures.length > 1 && (
        <button onClick={nextImage} className="next">
          <svg
            width="48"
            height="80"
            viewBox="0 0 48 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.960022 72.3458L8.04002 79.4258L47.64 39.8258L8.04002 0.22583L0.960022 7.30583L33.48 39.8258L0.960022 72.3458Z"
              fill="white"
            />
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
