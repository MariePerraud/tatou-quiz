import { Link } from "react-router-dom";
import prairie from "../assets/prairieChampignons.jpg";
import logo from "../assets/logo_toto.png";
import "../App.css";
import "../styles/Home.css";

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
      >
        JOUER
      </Link>
      <img
        src={logo}
        alt="logo"
        className="logoHome"
      />
    </div>
  );
}

export default Home;
