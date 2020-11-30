import React, { Component } from 'react';
import { connect } from 'react-redux';
import GameContainer from './GameContainer';
import NavBar from '../components/NavBar';
import Instructions from '../components/Instructions';
import { userLogout } from '../actions/userLogout'

class UsersContainer extends Component {

  handleLogout = event => {
    event.preventDefault()
    this.props.userLogout()
  }

  render() {
    const { currentUser } = this.props
    const win = window.visualViewport.width * .7
    const boardSize = win > 850 ? 850 : win
    const playerSize = boardSize / 30
    if (currentUser) {
      return (
        <>
          <NavBar loggedIn={true} handleLogout={this.handleLogout} />
          <Instructions />
          <GameContainer boardSize={boardSize} playerSize={playerSize} currentUser={this.props.currentUser} />
        </>
      )
    } else {
      return (
        <div>
          <NavBar loggedIn={false} />
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
)(UsersContainer)