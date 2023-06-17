import allCountryScores from "./allCountryScores.js";
import HighScoreTable from "./HighScoreTable.js";
import "./App.css";

function App() {
  return <HighScoreTable results={allCountryScores} />;
}

export default App;
