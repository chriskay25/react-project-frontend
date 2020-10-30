import React from 'react'
import {Link} from 'react-router-dom'

const NavBar = (props) => {

  return (
    <div>
      <Link to='/users/new' style={{paddingRight: '10px'}}> Sign Up</Link>
      <Link to='/login' style={{paddingRight: '10px'}}>Login</Link>
      <Link to='/logout'>Logout</Link>
    </div>
  )
}

export default NavBar