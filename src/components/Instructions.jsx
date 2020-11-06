import React from 'react'

const Instructions = () => {

  const style = () => {
    return {
      fontSize: 'medium',
      textAlign: 'center'
    }
  }

  return (
    <div className="Instructions" style={style()}>
      <p><strong>Instructions: </strong>This game is best played on a desktop.</p>
      <p>Use the arrow keys to move the green circle. Avoid oncoming enemies and stay alive.</p> 
      <p>The longer you stay alive, the higher your score. Good luck!</p>
    </div>
  )

}

export default Instructions