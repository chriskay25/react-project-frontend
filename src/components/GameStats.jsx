import React from 'react'

const GameStats = ({ score, timeElapsed }) => {
  return (
    <div className="GameStats">
      Score: {score}
    </div>
  )
}

export default GameStats