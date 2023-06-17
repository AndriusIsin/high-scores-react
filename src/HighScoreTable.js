import PlayerScore from "./PlayerScore";
const HighScoreTable = (props) => {
  return (
    <div class="main-container">
      <h1>High Scores per Country</h1>
      {props.results.map((country) => {
        return (
          <div class="internal-container">
            <h2>HIGH SCORES:{country.name}</h2>
            {country.scores.map((score) => {
              return (
                <div class="flexbox">
                  <PlayerScore player={score.n} score={score.s} />
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default HighScoreTable;
