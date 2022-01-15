import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Routes from "./Routes";

const Home = ({ currentUser }) => {
  const dispatch = useDispatch();
  const [menuOpen, toggle] = useState(false);

  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });

  const [board, setBoard] = useState(
    dimensions.width < 700 ? dimensions.width : 700
  );

  useEffect(() => {
    // Use window size to set state for board size
    function handleResize() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth,
      });
    }
    dispatch(() => {
      let smaller = Math.min(dimensions.height, dimensions.width);
      console.log("smaller: ", smaller);
      setBoard(smaller - 180);
    });

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [dispatch, dimensions, board]);

  return (
    <div className="home">
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
            <Link to="/logout">Logout</Link>
          </div>
        )}
      </div>

      <Routes board={board} currentUser={currentUser} />
    </div>
  );
};

export default Home;
