
const Banner = ({ text, image,opacity=0.6 }) => {
  return (
    <div
      className="banner"
      style={{
        backgroundImage: `linear-gradient(0deg,rgba(0, 0, 0, ${opacity}) 0, rgba(0,0,0,${opacity}) 40%), url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        marginBottom: "40px",
        borderRadius: "25px",
      }}
    >
      <p className="banner__text">{text}</p>
    </div>
  );
};

export default Banner;
