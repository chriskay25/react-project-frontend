import React from 'react'

const GameStats = ({ time, speed, enemyInterval }) => {
  return (
    <div className='game-stats'>
      <div>Time: {time}</div>
      <div>Speed: {speed}</div>
      <div>Enemy Spawn: {enemyInterval}</div>
    </div>
  )
}

export default GameStats