const Card = ({ image, name, status, species, location, origin }) => {
  const isAlive =
    status?.toLowerCase() === "alive" ? "status_green" : "status_red";

  return (
    <div className="card">
      <div className="image_container">
        <img src={image} alt={name} />
      </div>
      <div className="character_info">
        <div className="title">
          <h2>{name}</h2>
          <p>
            <span className={isAlive}></span>
            &nbsp;{status} - {species}
          </p>
        </div>
        <div className="rest_info">
          <p>Last known location:</p>
          <h4>{location?.name}</h4>
        </div>
        <div className="rest_info">
          <p>First seen in:</p>
          <h4>{origin?.name}</h4>
        </div>
      </div>
    </div>
  );
};

export default Card;
