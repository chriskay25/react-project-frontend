import React from 'react';


const LoginForm = ({handleFormChange, handleLoginFormSubmit, username, password}) => {
  return (
    <div className="FormBox">
      <h4 style={{padding: '1em'}}>LOGIN</h4>
      <form className="InputForm" onSubmit={handleLoginFormSubmit}>
        <label htmlFor="username">Username: </label>
        <input type="text" placeholder="Username" name="username" value={username} onChange={handleFormChange} />
        <br />
        <label htmlFor="password">Password: </label>
        <input type="password" placeholder="Password" name="password" value={password} onChange={handleFormChange} />
        <br />
        <input type="submit" value="Login"/>
      </form>
    </div>
  )
  }

export default LoginForm