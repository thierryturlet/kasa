import logements from "../data/logements.json";
import Card from "./Card";

function Homecards() {
  return (
    <div className="homecards">
      {logements.map((logements) => (
        <Card key={logements.id} text={logements.title} cover={logements.cover} />
      ))}
    </div>
  );
}

export default Homecards;
