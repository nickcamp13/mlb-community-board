/* eslint-disable react/prop-types */
import PlayerCard from "./PlayerCard";

const CommunityBoard = ({ players }) => {
  return (
    <div className="board">
      {players.map((player, index) => {
        const { name, imgURL, team, statsURL } = player;
        return <PlayerCard key={index} name={name} imgURL={imgURL} team={team} statsURL={statsURL}/>;
      })}
    </div>
  );
};

export default CommunityBoard;
