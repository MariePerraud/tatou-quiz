import React from "react";
import { NavLink } from "react-router-dom";
import logoHome from "../assets/logo_home.png";
import prairie from "../assets/prairieChampignons.jpg";
import "../styles/NotificationMessage.css";

function NotificationMessage() {
  return (
    <main
      className="App"
      style={{
        backgroundImage: `url(${prairie})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "1200px",
      }}
    >
      <section>
        <h2 className="notifMsg">Message envoyé</h2>
        <div className="fondIcone">
          <NavLink className="navLink" to="/">
            <img
              className="logoHome"
              src={logoHome}
              alt="logo d'une maison: permet le retour à la page d'accueil"
            />
          </NavLink>
        </div>
      </section>
    </main>
  );
}

export default NotificationMessage;