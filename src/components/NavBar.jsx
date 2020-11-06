import React from 'react'
import {Route, Link, Switch} from 'react-router-dom'
import Logout from './Logout'
import SignupForm from './SignupForm'
import LoginForm from './LoginForm'

const NavBar = ({ loggedIn, handleLoginFormChange, handleLoginFormSubmit, handleLogout }) => {

  if (loggedIn) {
    return (
      <div className="NavBar">
        <Logout handleLogout={handleLogout} />
      </div>
    )
  } else {
    return (
      <div className="NavBar">
        <h2>Please sign up or log in to Play</h2>
        <Link to='/users/new' style={{paddingRight: '10px'}}> Sign Up</Link>
        <Link to='/login' style={{paddingRight: '10px'}}>Login</Link>

        <Switch>
          <Route exact path="/users/new">
            <SignupForm />
          </Route>
          <Route exact path="/login">
            <LoginForm handleLoginFormChange={handleLoginFormChange} handleLoginFormSubmit={handleLoginFormSubmit} />
          </Route>
        </Switch>
      </div>
    )
  }
}

export default NavBar