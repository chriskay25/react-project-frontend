import React from 'react';

const User = ({ currentUser }) => {
  console.log("User Props: ", currentUser)

  return (
    <div className="User">
      <small><strong>Username:</strong> {currentUser.username}</small>
      <small style={{position: 'absolute', right: 8}}><strong>High Score:</strong> {currentUser.highScore}</small>
    </div>
  )
}

export default User