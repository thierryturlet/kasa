

const Banner = ({text, image}) => {
   
    return (
      <div className="banner"
             
        style={{ 
          backgroundImage: `url(${image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          width: '80%', 
          borderRadius: '25px' //
          
        }}
      >    
          <p className="banner__text">{text}</p>
      </div>
    );
};

export default Banner;