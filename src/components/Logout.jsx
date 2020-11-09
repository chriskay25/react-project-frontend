import React from 'react';

const Logout = ({ handleLogout }) => {
  return (
    <form className="UserLogout" onSubmit={handleLogout} style={{position: 'absolute', right: 10, top: 10}}>
      <input type="submit" value="Logout" />
    </form>
  )
}

export default Logout