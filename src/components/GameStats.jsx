import React from 'react'

const GameStats = ({ score, gameOver }) => {
  return (
    <div className={gameOver ? 'GameStats game-over-score' : 'GameStats'}>
      <p>Score: {score}</p>
    </div>
  )
}

export default GameStats