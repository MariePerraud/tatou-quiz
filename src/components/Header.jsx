import React, { useContext } from "react";
import { Link } from "react-router-dom";
import ScoreContext from "../contexts/ScoreContext";
import logo from "../assets/logo_toto.png";
import "../App.css";
import "../styles/Header.css";

function Header() {
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
          <h1 style={{ marginLeft: "1rem" }}>Tatou Quiz</h1>
          <div className="menu" onClick={handleClick}>
            &equiv; Menu
          </div>
          <div id="myLinks">
            <Link to="/" onClick={handleClick}>
              Accueil
            </Link>
            <Link to="/Themes" onClick={handleClick}>
              Thèmes
            </Link>
            <Link to="/Regles" onClick={handleClick}>
              Règles
            </Link>
          </div>
        </div>
      </div>

      {/* version desktop */}
      <div
        className="desktop"
        style={{
          position: "fixed",
          zIndex: 3,
          width: "100%",
        }}
      >
        <nav>
          <div style={{ marginLeft: "1rem" }}>
            <img
              src={logo}
              alt="logo"
              style={{ width: "5rem", transform: "scaleX(-1)" }}
            />
          </div>
          <div>
            <h1>Tatou Quiz</h1>
          </div>
          <div className="liens">
            <Link
              to="/"
              style={{
                textDecoration: "none",
              }}
            >
              <h2
                style={{
                  color: "var(--beige)",
                  marginRight: "1rem",
                }}
                onClick={() => setScore(0)}
              >
                Accueil
              </h2>
            </Link>
            <Link
              to="/Themes"
              style={{
                textDecoration: "none",
              }}
            >
              <h2
                style={{
                  color: "var(--beige)",
                  marginRight: "1rem",
                }}
                onClick={() => setScore(0)}
              >
                Thèmes
              </h2>
            </Link>
            <Link
              to="/Regles"
              style={{
                textDecoration: "none",
              }}
            >
              <h2
                style={{
                  color: "var(--beige)",
                  marginRight: "1rem",
                }}
                onClick={() => setScore(0)}
              >
                Règles
              </h2>
            </Link>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Header;
