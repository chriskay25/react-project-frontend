import React, { Component } from 'react';
import { connect } from 'react-redux';
import GameContainer from './GameContainer';
import Instructions from '../components/Instructions';
import { userLogout } from '../actions/userLogout'
import { getCurrentUser } from '../actions/getCurrentUser'

class UsersContainer extends Component {

  render() {
    const { currentUser } = this.props
    const win = window.visualViewport.width * .7
    const boardSize = win > 850 ? 850 : win
    const playerSize = boardSize / 30
    return (
      <>
        <Instructions />
        <GameContainer boardSize={boardSize} playerSize={playerSize} currentUser={currentUser} />
      </>
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
  {userLogout,
  getCurrentUser}
)(UsersContainer)