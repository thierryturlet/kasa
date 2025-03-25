import {Link } from "react-router-dom"; 

const Card = ({ text,cover,id }) => {
    return (
      <Link to={`/logement/${id}`}  className="card-home">
        <img src={cover}/>
        <p className="card__text">{text}</p>
      </Link>
    );
  };
  
  export default Card;
  