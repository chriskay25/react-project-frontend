import React from 'react'

const HighScore = ({game}) => {

  return(
    <div className='high-score'>
      {game.user.username + ' - ' + game.score}
    </div>
  )
}

export default HighScore