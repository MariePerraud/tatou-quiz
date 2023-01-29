import React from "react";
import Accordeon from "../components/Accordeon";
import mongolfieres from "../assets/mongolfieres.jpg";
import "../App.css";
import "../styles/Themes.css";

export default function Themes() {
  return (
    <div
      className="App"
      style={{
        backgroundImage: `url(${mongolfieres})`,
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
      }}
    >
      <div className="displayAccordeon">
        <Accordeon />
      </div>
    </div>
  );
}
