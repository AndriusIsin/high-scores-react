import { useState } from "react";
import PlayerScore from "./PlayerScore";
import Button from "./Button";
import { SortDescending, SortAscending } from "./Sort";
const HighScoreTable = (props) => {
  const [active, setActive] = useState("Ascending");
  function handleClick() {
    if (active === "Ascending") {
      setActive("Descending");
    } else {
      setActive("Ascending");
    }
  }
  // please check my repository
  return (
    <div className="main-container">
      <Button click={handleClick} name={active} />
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
                .sort(active === "Ascending" ? SortAscending : SortDescending)
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
