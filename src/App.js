import React, { Component } from 'react';
import './App.css';
import UsersContainer from './containers/UsersContainer';
import { connect } from 'react-redux';
import Logout from './components/Logout'
import AuthForms from './components/AuthForms'
import Logo from './components/Logo'
import { getCurrentUser } from './actions/getCurrentUser'
import { userLogout } from './actions/userLogout'


class App extends Component {

  handleLogout = event => {
    event.preventDefault()
    this.props.userLogout()
  }

  render() {
    const { currentUser } = this.props
    return (
      <div className="App">
          <Logo currentUser={currentUser} />
          {currentUser ? null : <AuthForms />}
          {currentUser ? <UsersContainer /> : null}
          {currentUser ? <Logout handleLogout={this.handleLogout} /> : null}
      </div>
    )
  }
}

const mapState = (state) => ({
  currentUser: state.currentUser
})


export default connect(
  mapState, 
  { getCurrentUser, userLogout }
)(App)
