import React from 'react';


const LoginForm = ({handleLoginFormChange, handleLoginFormSubmit, username, password}) => {
  return (
    <>
      <h4>User Login</h4>
      <form className="LoginForm" onSubmit={handleLoginFormSubmit}>
        <label htmlFor="username">Username: </label>
        <input type="text" placeholder="Username" name="username" value={username} onChange={handleLoginFormChange} />
        <br />
        <label htmlFor="password">Password: </label>
        <input type="password" placeholder="Password" name="password" value={password} onChange={handleLoginFormChange} />
        <br />
        <input type="submit" />
      </form>
    </>
  )
  }

export default LoginForm