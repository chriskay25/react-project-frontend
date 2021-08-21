import React from 'react'
import SignupForm from './SignupForm'
import LoginForm from './LoginForm'
import { Route, Link, Switch, useLocation } from 'react-router-dom'

const AuthForms = () => {
    const location = useLocation()

    return (
        <div className='auth-forms'>
            {location.pathname === '/' && <div className='form-links'>
                <Link to='/users/new'> Sign Up</Link>
                <Link to='/login'>Log In</Link>   
            </div>}
            
            <Route exact path="/users/new" component={SignupForm} />
            <Route exact path="/login" component={LoginForm} />
        </div>
    )
}

export default AuthForms