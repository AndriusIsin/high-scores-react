import allCountryScores from "./allCountryScores.js";
import ScoreTable from "./ScoreTable.js";
import "./App.css";

function App() {
  return <ScoreTable results={allCountryScores} />;
}

export default App;
