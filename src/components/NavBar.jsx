import React from 'react'
import {Route, Link, Switch} from 'react-router-dom'
import Logout from './Logout'
import SignupForm from './SignupForm'
import LoginForm from './LoginForm'
import titleLogo from '../juke-title-5.png'

const NavBar = ({ loggedIn, handleFormChange, handleLoginFormSubmit, handleLogout }) => {

  if (loggedIn) {
    return (
      <div className='NavBar'>
        <div className='AppTitle' style={{display: 'flex', padding: '1rem'}}>
          <img src={titleLogo} className='titleImage' style={{maxHeight: '4rem'}} />
        </div>
        <Logout handleLogout={handleLogout} />
      </div>
    )
  } else {
    return (
      <div className='NavBar'>
        <div className="AppTitle" style={{display: 'flex', padding: '2rem'}}>
          <img src={titleLogo} className='titleImage' style={{maxHeight: '4rem'}} />
        </div>
        <p style={{fontSize: '1.5rem', paddingLeft: '1em', marginBottom: '2rem', color: 'white'}}>Please sign up or log in to play</p>
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