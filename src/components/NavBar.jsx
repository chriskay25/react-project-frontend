import React from 'react'
import {Route, Link, Switch} from 'react-router-dom'
import Logout from './Logout'
import SignupForm from './SignupForm'
import LoginForm from './LoginForm'

const NavBar = ({ loggedIn, handleFormChange, handleLoginFormSubmit, handleLogout }) => {

  if (loggedIn) {
    return (
      <div className="NavBar">
        <h1 style={{textAlign: 'center', fontSize: '2.5rem'}}>JUKE</h1>
        <Logout handleLogout={handleLogout} />
      </div>
    )
  } else {
    return (
      <div className="NavBar">
        <h1 style={{textAlign: 'center', fontSize: '3rem'}}>JUKE</h1>
        <p style={{fontSize: '1.5rem', paddingLeft: '1em', marginBottom: '2rem'}}>Please sign up or log in to play</p>
        <Link to='/users/new' style={{marginLeft: '2rem', padding: '.5rem 1rem'}}> Sign Up</Link>
        <Link to='/login' style={{padding: '.5rem 1rem'}}>Log In</Link>

        <Switch>
          <Route exact path="/users/new">
            <SignupForm handleFormChange={handleFormChange} />
          </Route>
          <Route exact path="/login">
            <LoginForm handleFormChange={handleFormChange} handleLoginFormSubmit={handleLoginFormSubmit} />
          </Route>
        </Switch>
      </div>
    )
  }
}

export default NavBar