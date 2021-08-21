import React from 'react'

const Instructions = () => {

  return (
    <div className="Instructions">
      <div className='instructions-container'>
        <p><strong>NOTE: </strong>This game must be played on a desktop.</p>
        <p>Use the <span>ARROW KEYS</span> to move the green circle.</p>
        <p>Press <span>SHIFT</span> to use bombs to clear board of enemies.</p>
        <p>Press <span>SPACE BAR</span> to pause the game.</p> 
        <p>Avoid oncoming enemies and stay alive. The longer you stay alive, the higher your score.</p>
        <p>Good luck!</p>
      </div>
    </div>
  )

}

export default Instructions