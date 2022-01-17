import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import Logout from "./Logout";
import { userLogout } from "../actions/userLogout";

const Menu = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [menuOpen, toggle] = useState(false);

  const handleLogout = () => {
    history.push("/");
    dispatch(userLogout());
  };

  return (
    <div
      className="menu"
      style={{ background: menuOpen ? "#ffffff" : "#282c34" }}
      onClick={() => toggle(!menuOpen)}
    >
      <span
        style={{
          display: "block",
          color: menuOpen ? "#000" : "#fff",
          padding: ".5rem 1rem",
          cursor: "pointer",
        }}
      >
        <svg
          width="40px"
          height="40px"
          strokeWidth="3px"
          stroke={menuOpen ? "#000" : "#add8e6"}
        >
          <path d={menuOpen ? "m 0 10, 25 20" : "m 0 10, 25 0"} />
          <path d="m 0 18, 25 0" style={{ opacity: menuOpen ? 0 : 1 }} />
          <path d={menuOpen ? "m 0 30, 25 -20" : "m 0 26, 25 0"} />
        </svg>
      </span>
      {menuOpen && (
        <div className="home-links">
          <Link to="/game">Play Game</Link>
          <Link to="/highscores">High Scores</Link>
          <Link to="/instructions">Instructions</Link>
          <Logout handleLogout={handleLogout} />
        </div>
      )}
    </div>
  );
};

export default Menu;
