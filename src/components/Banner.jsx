

const Banner = ({text, image}) => {
   
    return (
      <div className="banner"
             
        style={{ 
          backgroundImage: `url(${image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          marginBottom: '40px',
          borderRadius: '25px', //
          
        }}
      >    
          <p className="banner__text">{text}</p>
      </div>
    );
};

export default Banner;