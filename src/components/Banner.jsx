

const Banner = ({text, image}) => {
   
    return (
      <div className="banner"
             
        style={{ 
          backgroundImage: `url(${image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          
          borderRadius: '25px', //
          maxWidth:'1024px',
          
        }}
      >    
          <p className="banner__text">{text}</p>
      </div>
    );
};

export default Banner;