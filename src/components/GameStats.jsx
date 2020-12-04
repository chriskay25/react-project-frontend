import React from 'react'

const GameStats = ({ score }) => {
  return (
    <div className="GameStats">
      <p>Score: {score}</p>
    </div>
  )
}

export default GameStats