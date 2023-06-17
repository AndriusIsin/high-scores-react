import PlayerScore from "./PlayerScore";
const HighScoreTable = (props) => {
  return (
    <div className="main-container">
      <h1>High Scores per Country</h1>
      {props.results.map((country) => {
        return (
          <div className="internal-container" key={country.name}>
            <h2>HIGH SCORES:{country.name}</h2>
            {country.scores.map((score, i) => {
              return (
                <div className="flexbox" key={i}>
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
