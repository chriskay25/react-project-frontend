import React, { Component } from 'react'
import { connect } from 'react-redux';
import {Link} from 'react-router-dom'
import Logout from './Logout'
import Logo from './Logo'
import { userLogout } from '../actions/userLogout'

class NavBar extends Component {

  handleLogout = event => {
    event.preventDefault()
    this.props.userLogout()
  }

  render() {
    if (this.props.currentUser) {
      return (
        <div className='NavBar LoggedIn'>
          <Logout handleLogout={this.handleLogout} />
        </div>
      )
    } else {
      return (
        <div className='NavBar LoggedOut'>
          <div className='auth-section'>
            <Link to='/users/new' style={{marginLeft: '2rem'}}> Sign Up</Link>
            <Link to='/login'>Log In</Link>
          </div>
        </div>
      )
    }
  }
}

const mapState = (state) => ({
  currentUser: state.currentUser
})

export default connect(
  mapState, 
  {userLogout}
)(NavBar)