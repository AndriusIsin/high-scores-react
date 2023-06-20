import PlayerScore from "./PlayerScore";
const HighScoreTable = (props) => {
  return (
    <div className="main-container">
      <h1>High Scores per Country</h1>
      {props.results
        .sort((country1, country2) => {
          if (country1.name < country2.name) {
            return -1;
          } else if (country1.name > country2.name) {
            return 1;
          } else {
            return 0;
          }
        })
        .map((country) => {
          return (
            <div className="internal-container" key={country.name}>
              <h2>HIGH SCORES:{country.name}</h2>
              {country.scores
                .sort((score1, score2) => {
                  if (score1.s > score2.s) {
                    return -1;
                  } else if (score1.s < score2.s) {
                    return 1;
                  } else {
                    return 0;
                  }
                })
                .map((score, i) => {
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
