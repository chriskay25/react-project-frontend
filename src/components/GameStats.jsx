import React from 'react'

const GameStats = ({ score, timeElapsed }) => {
  return (
    <div className="GameStats" style={{position: 'absolute', right: 10, bottom: 10, color: 'black', fontSize: '2.5 rem'}}>
      Score: {score}
    </div>
  )
}

export default GameStats