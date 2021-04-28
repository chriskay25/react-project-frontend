import React from 'react';

const User = ({ currentUser, gameOver, highScore, newHighScore }) => {
  return (
    <>
      <div className={gameOver ? 'User game-over-user-info' : 'User'}>
        <p><strong>Player:</strong> {currentUser.username}</p>
        <p><strong>High Score:</strong> {highScore ? highScore : currentUser.highScore}</p>
      </div>
      <div className='new-highscore'>
        {newHighScore ? <p>New High Score!!!</p> : ''}
      </div>
    </>
  )
}

export default User