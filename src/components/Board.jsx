import React, { Component } from 'react';
import boardBackground from '../assets/cheap_diagonal_fabric.png';

class Board extends Component {

  style = (props) => {
    const { boardSize, paused, gameOver } = this.props
      if (paused) {
        return {
          position: 'relative',
          width: `${boardSize}px`,
          height: `${boardSize}px`,
          margin: '0 auto',
          border: '10px black solid',
          backgroundImage: `radial-gradient(orange, lightblue)`
        }  
      } else if (gameOver) {
        return {
          position: 'relative',
          width: `${boardSize}px`,
          height: `${boardSize}px`,
          margin: '0 auto',
          background: 'linear-gradient(45deg, crimson, black)',
          backgroundSize: '300%',
          animation: 'game-over-animation 1s ease forwards'
        }
      } else {
        return {
          position: 'relative',
          width: `${boardSize}px`,
          height: `${boardSize}px`,
          margin: '0 auto',
          border: '10px lightblue solid',
          backgroundImage: `url(${boardBackground})`
        }
      }
  }

  render() {
    const { paused, gameOver } = this.props
    return (
      <div className="Board" style={this.style()}>
        {this.props.children}
        <p className="PausedText">
          {paused ? 'Paused' : null}
        </p>
        <p className="game-over-text">
          {gameOver ? 'Game Over' : null}
        </p>
      </div>
    ) 
  }
    
} 

export default Board