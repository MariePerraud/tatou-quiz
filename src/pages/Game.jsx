/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useContext } from "react";
import confetti from "https://cdn.skypack.dev/canvas-confetti";
import { useNavigate } from "react-router-dom";
import { stockData } from "../data";
import ScoreContext from "../contexts/ScoreContext";
import QuizContext from "../contexts/QuizContext";
import AnswerButton from "../components/AnswerButton";
import "../styles/Game.css";
import "../styles/countdown.css";
import cascade from "../assets/cascade_eau.jpg";

export default function Game() {
  const { score, setScore } = useContext(ScoreContext);
  const { quiz, difficulte } = useContext(QuizContext);

  const [questionNumber, setQuestionNumber] = useState(0);
  const [proposition, setProposition] = useState("");
  const [questions, setQuestions] = useState({});

  const navigate = useNavigate();

  function lastQuestion() {
    navigate("/score");
    confetti();
  }

  const getQuestion = () => {
    setQuestions(stockData[quiz][difficulte][questionNumber]);
  };

  useEffect(() => {
    if (questionNumber < 10) {
      setQuestionNumber(questionNumber + 1);
    } else {
      lastQuestion();
    }
    if (proposition === questions.réponse) {
      setScore(score + 1);
    }
  }, [proposition]);

  useEffect(() => getQuestion(), [proposition]);

  return (
    <div
      className="App"
      style={{
        backgroundImage: `url(${cascade})`,
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
      }}
    >
      <p className="question">
        Question n°{questionNumber} :{" "}
        {questions.question ? questions.question : ""}{" "}
      </p>

      <h1 className="scoring">Score : {score} / 10</h1>

      <AnswerButton
        className="button answ-one"
        proposition={questions.question ? questions.propositions[0] : ""}
        setProposition={setProposition}
      />
      <AnswerButton
        className="button answ-two"
        proposition={questions.question ? questions.propositions[1] : ""}
        setProposition={setProposition}
      />
      <AnswerButton
        className="button answ-three"
        proposition={questions.question ? questions.propositions[2] : ""}
        setProposition={setProposition}
      />
      <AnswerButton
        className="button answ-four"
        proposition={questions.question ? questions.propositions[3] : ""}
        setProposition={setProposition}
      />
    </div>
  );
}
