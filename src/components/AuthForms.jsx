import React from 'react'
import SignupForm from './SignupForm'
import LoginForm from './LoginForm'
import { Route, Link } from 'react-router-dom'


const AuthForms = () => {
    return (
        <div className='auth-forms'>
            <div className='form-links'>
                <Link to='/users/new'> Sign Up</Link>
                <Link to='/login'>Log In</Link>   
            </div>
            
            <Route exact path="/users/new" component={SignupForm} />
            <Route exact path="/login" component={LoginForm} />
        </div>
    )
}

export default AuthForms