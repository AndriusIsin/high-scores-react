const PlayerScore = (props) => {
  return (
    <div className="flex">
      <p className="name">{props.player.toUpperCase()} </p>
      <p className="score">{props.score}</p>
    </div>
  );
};
export default PlayerScore;
