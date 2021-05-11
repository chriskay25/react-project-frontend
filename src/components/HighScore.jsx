import React from 'react'

const HighScore = ({ game, usersScore }) => {

  return(
      <div className='highscore'>
        {game ? (game.user.username + ' - ' + game.score) : (usersScore.score)}
      </div>
  )
}

export default HighScore