import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import ScoreContext from "../contexts/ScoreContext";
import pontTroncArbre from "../assets/pont_tronc_arbre.jpg";
import "../App.css";
import "../styles/Score.css";

function Score() {
  const { score, setScore } = useContext(ScoreContext);
  return (
    <div
      className="App"
      style={{
        backgroundImage: `url(${pontTroncArbre})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
      }}
    >
      <h2 className="scoreResult">
        Score : <br /> {score} / 10
      </h2>
      <div className="scoreLiens">
        <NavLink to="/">
          <h4 className="jouer" onClick={() => setScore(0)}>
            Accueil
          </h4>
        </NavLink>
        <NavLink to="/Themes">
          <h4 className="jouer" onClick={() => setScore(0)}>
            Thèmes
          </h4>
        </NavLink>
      </div>
    </div>
  );
}

export default Score;
