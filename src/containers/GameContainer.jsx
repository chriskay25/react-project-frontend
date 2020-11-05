import React, { Component } from 'react';


class GameContainer extends Component {

  constructor(props) {
    super(props)
    const { boardSize, playerSize } = this.props
    this.state = {
      boardSize: boardSize,
      playerSize: playerSize,
      score: 0,
      timeElapsed: 0,
      speed: 5,
      positions: {
        player: {
          x: 0,
          y: 0
        },
        enemies: []
      }
    }
  }

  render() {
    return (
      <div className="GameContainer">
        Game
      </div>
    )
  }

}

export default GameContainer