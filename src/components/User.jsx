import React from 'react';

const User = ({ currentUser, gameOver, score, highScore, newHighScore, bombs }) => {
  return (
    <>
      <div className={gameOver ? 'User game-over-user-info' : 'User'}>
        <p><strong>Player:</strong> {currentUser.username}</p>
        <p><strong>High Score:</strong> {highScore ? highScore : currentUser.highScore}</p>
      </div>
      <div className='new-highscore'>
        {newHighScore ? <h1>New High Score!</h1> : ''}
      </div>
      <span className='bombs'><strong>Bombs:</strong> {bombs}</span>
      <div className={gameOver ? 'score game-over-score' : 'score'}>
        <span>Score: {score}</span>
    </div>
    </>
  )
}

export default User