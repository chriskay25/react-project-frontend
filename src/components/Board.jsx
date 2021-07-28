import React, { Component } from 'react';
import boardBackground from '../assets/cheap_diagonal_fabric.png';

class Board extends Component {

  style = () => {
    const { boardSize, paused, gameOver } = this.props
      if (paused) {
        return {
          width: `${boardSize}px`, 
          height: `${boardSize}px`, 
          border: '10px black solid',
          backgroundImage: `radial-gradient(orange, lightblue)`
        }  
      } else if (gameOver) {
        return {
          width: `${boardSize}px`,
          height: `${boardSize}px`,
          backgroundImage: 'linear-gradient(45deg, crimson, black)',
          backgroundSize: '300%',
          animation: 'game-over-animation 1s ease forwards'
        }
      } else {
        return {
          width: `${boardSize}px`,
          height: `${boardSize}px`,
          border: '10px lightblue solid',
          backgroundImage: `url(${boardBackground})`
        }
      }
  }

  render() {
    const { paused, gameOver, startGame } = this.props
    return (
      <div className='board' style={this.style()}>
        {this.props.children}
        <p className='paused-text'>{paused ? 'Paused' : null}</p>
        <p className='game-over-text'>{gameOver ? 'Game Over' : null}</p>
        {gameOver ? <button className='reset-button' onClick={startGame}>New Game</button> : null}
      </div>
    ) 
  }
    
} 

export default Board