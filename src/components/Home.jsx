import React, { useState, useEffect } from "react";
import Routes from "./Routes";
import Options from "./Options";
import { useLocation } from "react-router-dom";

const Home = ({ currentUser }) => {
  const location = useLocation();
  const [board, setBoard] = useState({
    height: window.innerHeight * 0.8,
    width: window.innerWidth * 0.9,
  });

  useEffect(() => {
    // Use window size to set state for board size
    function handleResize() {
      setBoard({
        height: window.innerHeight * 0.8,
        width: window.innerWidth * 0.9,
      });
    }

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [board]);

  return (
    <div className="home">
      {location.pathname === "/home" && <Options />}
      <Routes board={board} currentUser={currentUser} />
    </div>
  );
};

export default Home;
