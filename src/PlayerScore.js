const PlayerScore = (props) => {
  return (
    <div class="flex">
      <p class="name">{props.player.toUpperCase()} </p>
      <p class="score">{props.score}</p>
    </div>
  );
};
export default PlayerScore;
