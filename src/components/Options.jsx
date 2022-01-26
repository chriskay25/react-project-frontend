import React from "react";
import { Link } from "react-router-dom";

const Options = () => {
  return (
    <div className="options">
      <Link to="/home/game">Play Game</Link>
      <Link to="/home/highscores">High Scores</Link>
      <Link to="/home/instructions">Instructions</Link>
    </div>
  );
};

export default Options;
