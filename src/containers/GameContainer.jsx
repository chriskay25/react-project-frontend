import React, { Component } from 'react';
import Board from '../components/Board';
import Player from '../components/Player'


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
          x: (boardSize / 2) - (playerSize / 2),
          y: (boardSize / 2) - (playerSize / 2)
        },
        enemies: []
      }
    }
  }

  startGame = () => {
    console.log("Game Started")
    this.timeInterval = setInterval(this.updateGame, 1000)
  }

  updateGame = () => {
    this.setState((state) => ({
      timeElapsed: state.timeElapsed + 1,
      score: state.score + 10
    }))
  }

  render() {
    const { boardSize, playerSize, positions } = this.state
    return (
      <div className="GameContainer">
        <Board boardSize={boardSize} playerSize={playerSize}>
          <Player playerPosition={positions.player} playerSize={playerSize} />
        </Board>
      </div>
    )
  }

  componentDidMount() {
    this.startGame()
  }

}

export default GameContainer