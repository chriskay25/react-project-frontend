import React, { useState } from 'react'
import SignupForm from './SignupForm'
import LoginForm from './LoginForm'
import { Route, Link } from 'react-router-dom'


const AuthForms = () => {
    const [clicked, setClicked] = useState(false)
    const handleClick = () => setClicked(true)

    return (
        <div className='auth-forms'>
            {!clicked && <div className='form-links'>
                <Link to='/users/new' onClick={handleClick}> Sign Up</Link>
                <Link to='/login' onClick={handleClick}>Log In</Link>   
            </div>}
            
            <Route exact path="/users/new" component={SignupForm} />
            <Route exact path="/login" component={LoginForm} />
        </div>
    )
}

export default AuthForms