const ScoreTable = (props) => {
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
                  <div class="flex">
                    <p class="name">{score.n.toUpperCase()} </p>
                    <p class="score">{score.s}</p>
                  </div>
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default ScoreTable;
