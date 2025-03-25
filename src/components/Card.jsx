

const Card = ({ text,cover }) => {
    return (
      <a className="card-home">
        <img src={cover}/>
        <p className="card__text">{text}</p>
      </a>
    );
  };
  
  export default Card;
  