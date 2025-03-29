import { useState, useRef } from "react";
import "./Collapse.css"; // Le fichier CSS associé

const Collapse = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);

  return (
    <div className="collapse">
      {/* Titre du collapse */}
      <button className="collapse-header" onClick={() => setIsOpen(!isOpen)}>
  {title}
  <span className={`arrow ${isOpen ? "open" : ""}`}>
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6 9L12 15L18 9" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  </span>
</button>

      {/* Contenu du collapse avec animation */}
      <div
        className="collapse-content"
        ref={contentRef}
        style={{
          maxHeight: isOpen ? `${contentRef.current?.scrollHeight}px` : "0px",
          opacity: isOpen ? "1" : "0",
        }}
      >
        {content}
      </div>
    </div>
  );
};

export default Collapse;
