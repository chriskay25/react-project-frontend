import React, { Component } from "react";

class Board extends Component {
  style = () => {
    const { boardSize, paused, gameOver } = this.props;
    if (paused) {
      return {
        width: `${boardSize.width}px`,
        height: `${boardSize.height}px`,
        border: "10px #ffd8a4 solid",
        backgroundImage: "radial-gradient(#FAFFB3, #E68C67)",
      };
    } else if (gameOver) {
      return {
        width: `${boardSize.width}px`,
        height: `${boardSize.height}px`,
        backgroundImage: "radial-gradient(crimson, black)",
        backgroundSize: "400%",
        animation: "game-over-animation 1s ease forwards",
      };
    } else {
      return {
        width: `${boardSize.width}px`,
        height: `${boardSize.height}px`,
        border: "10px lightblue solid",
      };
    }
  };

  render() {
    const { paused, gameOver, startGame } = this.props;
    return (
      <div className="board" style={this.style()}>
        {this.props.children}
        <p className="paused-text">{paused ? "Paused" : null}</p>
        {gameOver ? (
          <div className="game-over-container">
            <p className="game-over-text">Game Over</p>
            <button className="reset-button" onClick={startGame}>
              New Game
            </button>
          </div>
        ) : null}
      </div>
    );
  }
}

export default Board;
