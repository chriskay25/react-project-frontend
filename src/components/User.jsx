import React from 'react';

const User = ({ currentUser }) => {
  console.log("User Props: ", currentUser)

  return (
    <div className="User">
      <h3>Current User: {currentUser.username}</h3>
      <h4>Games Played: {currentUser.games.length}</h4>
    </div>
  )
}

export default User