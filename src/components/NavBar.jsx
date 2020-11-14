import React from 'react'
import {Route, Link, Switch} from 'react-router-dom'
import Logout from './Logout'
import SignupForm from './SignupForm'
import LoginForm from './LoginForm'
import titleLogo from '../assets/juke-title-28.png'

const NavBar = ({ loggedIn, handleFormChange, handleLoginFormSubmit, handleLogout }) => {

  if (loggedIn) {
    return (
      <div className='NavBar LoggedIn'>
        <div className="loggedInLogo">
          <img src={titleLogo} className='logo' alt='logo' style={{margin: '0 auto'}} />
        </div>
        <Logout handleLogout={handleLogout} />
      </div>
    )
  } else {
    return (
      <div className='NavBar LoggedOut'>
        <div className="loggedOutLogo">
          <img src={titleLogo} className='logo' alt='logo' />
        </div>
        <div className='auth-section'>
          <p>PLEASE SIGN UP OR LOG IN TO PLAY</p>
          <Link to='/users/new' style={{marginLeft: '2rem'}}> Sign Up</Link>
          <Link to='/login'>Log In</Link>

          <Switch>
            <Route exact path="/users/new">
              <SignupForm handleFormChange={handleFormChange} />
            </Route>
            <Route exact path="/login">
              <LoginForm handleFormChange={handleFormChange} handleLoginFormSubmit={handleLoginFormSubmit} />
            </Route>
          </Switch>
        </div>
      </div>
    )
  }
}

export default NavBar