import { Link } from "react-router-dom";
import "../styles/Regles.css";
import lac from "../assets/lac_ponton.jpg";

export default function Regles() {
  return (
    <div
      className="App"
      style={{
        backgroundImage: `url(${lac})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
      }}
    >
      <div className="instructions">
        <h3>Règles</h3>
        <p>
          L&apos;ensemble des questions de <b>Tatou Quiz</b> sont disponibles en
          appuyant sur le bouton <b>Jouer</b>. Choisissez une des{" "}
          <b>thématiques</b> proposées, ainsi que son niveau de{" "}
          <b>difficulté</b>, puis le <b>quiz</b> se lancera.
        </p>
      </div>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <Link to="/" className="jouer">
          <h4>Accueil</h4>
        </Link>
        <Link to="/Themes" className="jouer">
          <h4>Jouer</h4>
        </Link>
      </div>
    </div>
  );
}
