import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import AuthForms from './components/AuthForms'
import Home from './components/Home'
import Logo from './components/Logo'
import { getCurrentUser } from './actions/getCurrentUser'


class App extends Component {

  render() {
    const { currentUser } = this.props
    return (
      <div className="App">
          <Logo currentUser={currentUser} /> 
          {currentUser ? <Home currentUser={currentUser} /> : <AuthForms />}
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


export default connect(
  mapState, 
  { getCurrentUser }
)(App)
