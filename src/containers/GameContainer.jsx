import React, { Component } from 'react';
import Board from '../components/Board';
import Player from '../components/Player'
import Enemy from '../components/Enemy'


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

  handlePlayerMovement = (e) => {
    const { x, y } = this.state.positions.player
    const { boardSize, playerSize } = this.state

    switch (e.key) {
      case "ArrowUp":
        if (y <= 0) {
          return;
        } else {
          this.setState({
            positions: {
              ...this.state.positions,
              player: {
                x,
                y: y - 10
              }
            }
          })
        }
        break;
      case "ArrowDown":
        if (y > boardSize - playerSize) {
          return;
        } else {
          this.setState({
            positions: {
              ...this.state.positions,
              player: {
                x,
                y: y + 10
              }
            }
          })
        }
        break;
      case "ArrowLeft":
        if (x < 0) {
          return;
        } else {
          this.setState({
            positions: {
              ...this.state.positions,
              player: {
                x: x - 10,
                y
              }
            }
          })
        }
        break;
      case "ArrowRight":
        if (x > (boardSize - playerSize)) {
          return;
        } else {
          this.setState({
            positions: {
              ...this.state.positions,
              player: {
                x: x + 10,
                y
              }
            }
          })
        }
        break;
      default:
        return;
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
          <Player playerPosition={positions.player} playerSize={playerSize} handlePlayerMovement={this.handlePlayerMovement} />
          {this.state.positions.enemies.map(enemy => 
            <Enemy
              enemy={enemy}
              playerPosition={positions.player}
              enemySize={playerSize}
            />
          )}
        </Board>
      </div>
    )
  }

  componentDidMount() {
    this.startGame()
  }

}

export default GameContainer