import React from 'react';

const Logout = ({ handleLogout }) => {
  return (
    <form className="UserLogout" onSubmit={handleLogout}>
      <input type="submit" value="Logout" />
    </form>
  )
}

export default Logout