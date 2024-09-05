import React, { useState, useEffect } from "react";

const User = ({
  currentUser,
  gameOver,
  paused,
  score,
  highScore,
  newHighScore,
  bombs,
}) => {
  const [color, setColor] = useState(null);

  useEffect(() => {
    const gamestate = () => {
      gameOver && setColor("#cee1e2");
      paused && setColor("#000");
      !gameOver && !paused && setColor("#000");
    };

    gamestate();
  }, [paused, gameOver]);

  return (
    <>
      <div className={gameOver ? "User game-over-user-info" : "User"}>
        <p style={{ fontWeight: "800", color: color }}>
          Player: {currentUser.username}
        </p>
        <p style={{ fontWeight: "800", color: color }}>
          High Score: {highScore ? highScore : currentUser.highScore}
        </p>
      </div>
      <div className="new-highscore">
        {newHighScore ? <h1>New High Score!</h1> : ""}
      </div>
      <span style={{ fontWeight: "800", color: color }} className="bombs">
        Bombs: {bombs}
      </span>
      <div
        className={gameOver ? "score game-over-score" : "score"}
        style={{ color: color }}
      >
        <span>Score: {score}</span>
      </div>
    </>
  );
};

export default User;
