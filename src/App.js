import React, { Component } from 'react';
import './App.css';
import UsersContainer from './containers/UsersContainer';
import { connect } from 'react-redux';
import NavBar from './components/NavBar'
import SignupForm from './components/SignupForm'
import LoginForm from './components/LoginForm'
import Logout from './components/Logout'
import Logo from './components/Logo'
import { Route } from 'react-router-dom'
import { getCurrentUser } from './actions/getCurrentUser'

class App extends Component {
  render() {
    const { currentUser } = this.props
    return (
      <div className="App">
          <NavBar />
          <Logo />
          <Route exact path="/users/new" component={SignupForm} />
          <Route exact path="/login" component={LoginForm} />
          <Route exact path="/logout" component={Logout} />
          {currentUser ? <UsersContainer /> : null}
      </div>
    )
  }

  componentDidMount() {
    this.props.getCurrentUser()
  }
}

const mapState = (state) => ({
  currentUser: state.currentUser
})


export default connect(mapState, { getCurrentUser })(App)
