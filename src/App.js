import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Regles from "./pages/Regles";
import Themes from "./pages/Themes";
import Game from "./pages/Game";
import Score from "./pages/Score";
import ScoreContext from "./contexts/ScoreContext";
import QuizContext from "./contexts/QuizContext";
import './App.css';
import "./styles/Home.css";
import "./styles/Header.css";

function App() {
  const [score, setScore] = useState(0);
  const [quiz, setQuiz] = useState("");
  const [difficulte, setDifficulte] = useState("");
  
  return (
    <div>
      <Router>
        <ScoreContext.Provider value={{ score, setScore }}>
          <QuizContext.Provider
            value={{ quiz, setQuiz, difficulte, setDifficulte }}
          >
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/regles" element={<Regles />} />
              <Route path="/themes" element={<Themes />} />
              <Route path="/jeu" element={<Game />} />
              <Route path="/score" element={<Score />} />
            </Routes>
          </QuizContext.Provider>
        </ScoreContext.Provider>
      </Router>
    </div>
  );
}

export default App;
