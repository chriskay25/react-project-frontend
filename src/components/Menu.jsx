import React, { useState } from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  const [menuOpen, toggle] = useState(false);

  return (
    <div
      className="menu"
      style={{ background: "#282c34" }}
      onClick={() => toggle(!menuOpen)}
    >
      <span
        style={{
          display: "block",
          color: menuOpen ? "#000" : "#fff",
          cursor: "pointer",
        }}
      >
        <svg
          width="40px"
          height="40px"
          strokeWidth="3px"
          stroke={menuOpen ? "#fff" : "#add8e6"}
        >
          <path d={menuOpen ? "m 0 10, 25 20" : "m 0 10, 25 0"} />
          <path d="m 0 18, 25 0" style={{ opacity: menuOpen ? 0 : 1 }} />
          <path d={menuOpen ? "m 0 30, 25 -20" : "m 0 26, 25 0"} />
        </svg>
      </span>
      {menuOpen && (
        // <div className="menu-links">
        <div className={`menu-links ${menuOpen ? "open" : ""}`}>
          <Link to="/home/game">Play Game</Link>
          <Link to="/home/highscores">High Scores</Link>
          <Link to="/home/instructions">Instructions</Link>
        </div>
      )}
    </div>
  );
};

export default Menu;
