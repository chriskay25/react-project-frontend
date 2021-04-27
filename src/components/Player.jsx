import React, { useState, useEffect } from 'react'
import playerCircle from '../assets/Circle-1.png'


const Player = ({playerPosition, playerSize, handleKeyDown, handleKeyUp}) => {

  useEffect(() => {
    window.onkeydown = handleKeyDown
    window.onkeyup = handleKeyUp
  })
  
  const style = () => {
    const { x, y } = playerPosition
    return {
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