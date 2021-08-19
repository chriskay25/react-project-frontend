import React from 'react'

const GameStats = ({ score, gameOver }) => {
  return (
    <div className={gameOver ? 'GameStats game-over-score' : 'GameStats'}>
      <span>Score: {score}</span>
    </div>
  )
}

export default GameStats