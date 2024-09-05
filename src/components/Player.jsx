import React, { useEffect } from 'react'
import playerCircle from '../assets/Circle-1.png'


const Player = ({ playerPosition, playerSize, handleKeyDown, handleKeyUp, gameOver }) => {

  useEffect(() => {
    window.onkeydown = handleKeyDown
    window.onkeyup = handleKeyUp
  })
  
  const style = () => {
    const { x, y } = playerPosition
    const opacity = gameOver ? 0 : 1
    return {
      opacity: opacity,
      position: 'absolute',
      left: `${x}px`,
      top: `${y}px`,
      width: `${playerSize}px`,
    }
  }
  
  return (
    <img src={playerCircle} style={style()} alt="Player" tabIndex="0" />
  )

}

export default Player