import React from 'react'
import titleLogo from '../assets/juke-title-28.png'

const Logo = ({ currentUser }) => {
  return (
    <div className={('logo ') + (currentUser ? 'logged-in-logo' : 'logged-out-logo')}>
      <img src={titleLogo} alt='logo' />
    </div>
  )
}

export default Logo