/* eslint-disable react/prop-types */
const PlayerCard = ({ name, imgURL, team, statsURL }) => {
  return (
    <div className="card">
      <img src={imgURL} alt={name} />
      <h3>{name}</h3>
      <h4>{team}</h4>
      <a href={statsURL} target="_blank" rel="noreferrer"><button>Player Stats</button></a>
    </div>
  );
};

export default PlayerCard;
