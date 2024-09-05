import React from "react";

const Instructions = () => {
  return (
    <div className="Instructions">
      <div className="instructions-container">
        <p
          style={{ fontSize: "11px", textAlign: "center", color: "lightblue" }}
        >
          <strong>NOTE: </strong>For now, this game must be played on a desktop.
        </p>
        <p>
          Avoid oncoming enemies and stay alive. The longer you stay alive, the
          higher your score. Enemies get faster and spawn more frequently as the
          game progresses, and the player's circle also grows over time.
        </p>
        <h2 style={{ textAlign: "center", marginTop: "3rem", fontWeight: 800 }}>
          CONTROLS
        </h2>
        <ul className="instructions-controls">
          <li>
            <span style={{ textAlign: "right" }}>Move Player: </span>
            <span className="keyboard-key">ARROW KEYS</span>
          </li>
          <li>
            <span style={{ textAlign: "right" }}>Use Bomb: </span>
            <span className="keyboard-key">SHIFT</span>
          </li>
          <li>
            <span style={{ textAlign: "right" }}>Pause: </span>
            <span className="keyboard-key">SPACEBAR</span>
          </li>
        </ul>
        <p
          style={{
            textAlign: "center",
            marginTop: "4rem",
            fontSize: "3.5rem",
            fontWeight: 400,
            color: "lightblue",
          }}
        >
          Good luck!
        </p>
      </div>
    </div>
  );
};

export default Instructions;
