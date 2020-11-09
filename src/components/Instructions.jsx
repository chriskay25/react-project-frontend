import React from 'react'

const Instructions = () => {

  const style = () => {
    return {
      fontSize: '.5em',
      textAlign: 'center'
    }
  }

  return (
    <div className="Instructions" style={style()}>
      <p><strong>Note: </strong>This game is best played on a desktop.</p>
      <p>Use the arrow keys to move the green circle. Press the space bar to pause.</p> 
      <p>Avoid oncoming enemies and stay alive. The longer you stay alive, the higher your score. Good luck!</p>
    </div>
  )

}

export default Instructions