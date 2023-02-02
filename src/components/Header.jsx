import React, { useContext } from "react";
import ScoreContext from "../contexts/ScoreContext";
import { Link } from "react-router-dom";
import logo from "../assets/logo_toto2.png";
import "../App.css";
import "../styles/Header.css";

export default function Header() {
  const { setScore } = useContext(ScoreContext);

  function handleClick() {
    const x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
    setScore(0);
  }

  return (
    <>
      {/* version mobile */}
      <div className="mobile">
        <div className="topnav">
          <h1>Tatou Quiz</h1>
          <div className="menu" onClick={handleClick}>
            &equiv; Menu
          </div>
          <div id="myLinks">
            <Link to="/" onClick={handleClick}>
              Accueil
            </Link>
            <Link to="/themes" onClick={handleClick}>
              Thèmes
            </Link>
            <Link to="/regles" onClick={handleClick}>
              Règles
            </Link>
          </div>
        </div>
      </div>

      {/* version desktop */}
      <div className="desktop">
        <nav>
          <div>
            <img src={logo} alt="logo" />
          </div>
          <div>
            <h1>Tatou Quiz</h1>
          </div>
          <div className="liens">
            <Link to="/" onClick={() => setScore(0)}>
              Accueil
            </Link>
            <Link to="/themes" onClick={() => setScore(0)}>
              Thèmes
            </Link>
            <Link to="/regles" onClick={() => setScore(0)}>
              Règles
            </Link>
          </div>
        </nav>
      </div>
    </>
  );
};
