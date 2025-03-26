import { useState } from "react";
import "../components/Slideshow.css"; // Assure-toi d'ajouter un fichier CSS pour le style

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

      {pictures.length > 1 && (
        <button onClick={prevImage} className="prev">❮</button>
      )}
      
      <img src={pictures[currentIndex]} alt={title} />
      
      {pictures.length > 1 && (
        <button onClick={nextImage} className="next">❯</button>
      )}
      
      {pictures.length > 1 && (
        <div className="image-index">
          {currentIndex + 1} / {pictures.length}
        </div>
      )}
    </div>
  );
};

export default Slideshow;

