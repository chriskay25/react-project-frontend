import React from 'react';

const User = ({ currentUser, gameOver, highScore }) => {
  return (
    <div className={gameOver ? 'User game-over-user-info' : 'User'}>
      <p><strong>Player:</strong> {currentUser.username}</p>
      <p><strong>High Score:</strong> {highScore ? highScore : currentUser.highScore}</p>
    </div>
  )
}

export default User