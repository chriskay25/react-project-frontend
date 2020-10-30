import React from 'react';

const UserLogout = ({ handleLogout }) => {
  return (
    <form className="UserLogout" onSubmit={handleLogout}>
      <input type="submit" value="Logout" />
    </form>
  )
}

export default UserLogout