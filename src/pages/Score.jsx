import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import pontTroncArbre from "../assets/pont_tronc_arbre.jpg";
import "../styles/NotificationMessage.css";
import ScoreContext from "../contexts/ScoreContext";

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
      <h2 style={{ textAlign: "center" }}>
        Score : <br /> {score} / 10
      </h2>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <NavLink to="/" style={{ textDecoration: "none" }}>
          <h4 className="jouer" onClick={() => setScore(0)}>
            Accueil
          </h4>
        </NavLink>
        <NavLink to="/Themes" style={{ textDecoration: "none" }}>
          <h4 className="jouer" onClick={() => setScore(0)}>
            Thèmes
          </h4>
        </NavLink>
      </div>
    </div>
  );
}

export default Score;
