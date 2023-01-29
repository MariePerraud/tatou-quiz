import { Link } from "react-router-dom";
import "../styles/countdown.css";
import "../App.css";
import "../styles/Home.css";
import prairie from "../assets/prairieChampignons.jpg";
import logo from "../assets/logo_toto.png";

function Home() {
  return (
    <div
      className="App"
      style={{
        backgroundImage: `url(${prairie})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
      }}
    >
      <Link
        to="/Themes"
        className="bigButton"
        style={{ textDecoration: "none", marginTop: "15rem" }}
      >
        JOUER
      </Link>
      <img
        src={logo}
        alt="logo"
        style={{
          width: "10rem",
          margin: "5rem 10rem 0rem 20rem",
        }}
      />
    </div>
  );
}

export default Home;
