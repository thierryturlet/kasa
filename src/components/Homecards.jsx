import logements from "../data/logements.json";
import Card from "./Card";

function Homecards() {
  return (
    <div className="homecards">
      {logements.map((logement) => ( 
        <Card 
          key={logement.id} 
          id={logement.id} // Ajout de l'ID ici
          text={logement.title} 
          cover={logement.cover} 
        />
      ))}
    </div>
  );
}

export default Homecards;
