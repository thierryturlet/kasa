

const Banner = ({text, image}) => {
   
    return (
      <div className="banner"
             
        style={{ 
          backgroundImage: `url(${image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          width: '100%', 
          borderRadius: '25px', //
          maxWidth:'1024px',
          padding:'0px',
        }}
      >    
          <p className="banner__text">{text}</p>
      </div>
    );
};

export default Banner;