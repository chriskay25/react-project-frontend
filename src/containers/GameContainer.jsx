import React, { Component } from 'react';
import Board from '../components/Board';
import Player from '../components/Player';
import Enemy from '../components/Enemy';
import GameStats from '../components/GameStats';
import User from '../components/User'
import { connect } from 'react-redux'
import { saveGame } from '../actions/saveGame'

class GameContainer extends Component {

  constructor(props) {
    super(props)
    const { boardSize, playerSize } = this.props
    this.state = {
      gameOver: true,
      score: 0,
      timeElapsed: 0,
      speed: 5,
      paused: false,
      enemyInterval: 2500,
      enemyID: 0,
      positions: {
        player: {
          x: (boardSize / 2) - (playerSize / 2),
          y: (boardSize / 2) - (playerSize / 2)
        },
        enemies: []
      },
      up: false,
      down: false,
      left: false,
      right: false
    }
  }

  handlePlayerMovement = (e) => {
    const { paused } = this.state
    const { x, y } = this.state.positions.player
    const { boardSize, playerSize } = this.props

    switch (e.key) {
      case 'ArrowUp':  // Up arrow
        if (y <= 0 || paused) {
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
      case 'ArrowDown':  // Down arrow
        if ((y > boardSize - playerSize) || paused) {
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
      case 'ArrowLeft':  // Left arrow
        if (x < 0 || paused) {
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
      case 'ArrowRight':  // Right arrow
        if ((x > (boardSize - playerSize  )) || paused) {
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
      case 'Enter':  // Space bar
        this.pauseGame()
        break;
      default:
        return;
    }
  }

  // handlePlayerMovement = (e) => {
  //   const { paused } = this.state
  //   const { x, y } = this.state.positions.player
  //   const { boardSize, playerSize } = this.props
  //   switch (e.keyCode) {
  //     case 38:  // Up arrow
  //       if (y <= 0 || paused) {
  //         return;
  //       } else {
  //         this.setState({
  //           positions: {
  //             ...this.state.positions,
  //             player: {
  //               x,
  //               y: y - 10
  //             }
  //           }
  //         })
  //       }
  //       break;
  //     case 40:  // Down arrow
  //       if ((y > boardSize - playerSize) || paused) {
  //         return;
  //       } else {
  //         this.setState({
  //           positions: {
  //             ...this.state.positions,
  //             player: {
  //               x,
  //               y: y + 10
  //             }
  //           }
  //         })
  //       }
  //       break;
  //     case 37:  // Left arrow
  //       if (x < 0 || paused) {
  //         return;
  //       } else {
  //         this.setState({
  //           positions: {
  //             ...this.state.positions,
  //             player: {
  //               x: x - 10,
  //               y
  //             }
  //           }
  //         })
  //       }
  //       break;
  //     case 39:  // Right arrow
  //       if ((x > (boardSize - playerSize  )) || paused) {
  //         return;
  //       } else {
  //         this.setState({
  //           positions: {
  //             ...this.state.positions,
  //             player: {
  //               x: x + 10,
  //               y
  //             }
  //           }
  //         })
  //       }
  //       break;
  //     case 32:  // Space bar
  //       this.pauseGame()
  //       break;
  //     default:
  //       return;
  //   }
  // }

  randomSide = (min, max) => {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  createNewEnemy = () => {
    const { player } = this.state.positions
    const { boardSize, playerSize } = this.props
    let newEnemy;

    this.setState({
      enemyID: this.state.enemyID + 1
    })

    switch(this.randomSide(1, 4)) {
      case 1:  // Left
        newEnemy = { key: this.state.enemyID, x: 0, y: player.y, direction: "Left" }
        break;
      case 2:  // Up
        newEnemy = { key: this.state.enemyID, x: player.x, y: 0, direction: "Up" }
        break;
      case 3:  // Right
        newEnemy = { key: this.state.enemyID, x: boardSize - playerSize, y: player.y, direction: "Right" }
        break;
      case 4:  // Down
        newEnemy = { key: this.state.enemyID, x: player.x, y: boardSize - playerSize, direction: "Down" }
        break;
      default:
        return;
    }

    this.setState({
      positions: {
        ...this.state.positions,
        enemies: [...this.state.positions.enemies].concat(newEnemy)
      }
    })
  }

  updateEnemyPositions = () => {
    const { speed, positions: {enemies}, positions: {player} } = this.state
    const { boardSize, playerSize } = this.props
    this.setState({
      positions: {
        ...this.state.positions,
        enemies: enemies.filter(enemy => !enemy.remove).map(enemy => {
          if (enemy.y < 0 || enemy.y > boardSize - playerSize || 
            enemy.x < 0 || enemy.x > boardSize - playerSize) {
              enemy.remove = true
              return enemy;
          }

          switch(enemy.direction) {
            case "Left":
              enemy.x += speed;
              break;
            case "Up":
              enemy.y += speed;
              break;
            case "Right":
              enemy.x -= speed;
              break;
            case "Down":
              enemy.y -= speed;
              break;
            default:
              break;
          }

          return enemy;
        })
      }
    })
  }

  startGame = () => {
    this.setState({
      gameOver: false
    })
    const { enemyInterval } = this.state
    this.createNewEnemy()
    this.timeInterval = setInterval(this.updateTime, 1000)
    this.scoreInterval = setInterval(this.updateScore, 100)
    this.enemyInterval = setInterval(this.updateEnemyPositions, 50)
    this.enemyCreationInterval = setInterval(this.createNewEnemy, enemyInterval)
  }

  updateTime = () => {
    this.setState((state) => ({ 
      timeElapsed: state.timeElapsed + 1,
    }))
    if (this.state.timeElapsed % 10 === 0) {
      this.setState({
        speed: this.state.speed + 1,
        playerSize: this.state.playerSize + 2
      })
    } else if (this.state.timeElapsed % 5 === 0) {
      clearInterval(this.enemyCreationInterval)
      this.setState({
        enemyInterval: this.state.enemyInterval - 100
      })
      this.enemyCreationInterval = setInterval(this.createNewEnemy, this.state.enemyInterval)
    }
  }

  updateScore = () => {
    this.setState((state) => ({
      score: state.score + 1
    }))
  }

  pauseWithSpace = (event) => {
    if (event.key === 32) {
      this.pauseGame()
    }
  }

  pauseGame = () => {
    if (this.state.gameOver) return
    if (!this.state.paused) {
      const { score, speed, timeElapsed, enemyInterval } = this.state
      clearInterval(this.timeInterval)
      clearInterval(this.scoreInterval)
      clearInterval(this.enemyCreationInterval)
      this.setState({
        paused: true,
        speed: 0,
        savedSpeed: speed,
        timeElapsed: 0,
        savedTime: timeElapsed,
        savedScore: score,
        savedInterval: enemyInterval
      })
    } else {
      const { savedScore, savedSpeed, savedTime, savedInterval } = this.state
      this.timeInterval = setInterval(this.updateTime, 1000)
      this.scoreInterval = setInterval(this.updateScore, 50)
      this.enemyCreationInterval = setInterval(this.createNewEnemy, 3000)
      this.setState({
        paused: false,
        speed: savedSpeed,
        timeElapsed: savedTime,
        score: savedScore,
        enemyInterval: savedInterval
      })
    }
  }

  gameOver = () => {
    const { score } = this.state
    this.setState({
      gameOver: true
    }) 
    this.props.saveGame({score})
    this.resetGame()
  }

  resetGame = () => {
    clearInterval(this.timeInterval)
    clearInterval(this.scoreInterval)
    clearInterval(this.enemyInterval)
    clearInterval(this.enemyCreationInterval)

    const { boardSize, playerSize } = this.props

    this.setState({
      score: 0,
      timeElapsed: 0,
      speed: 5,
      paused: false,
      enemyInterval: 2500,
      enemyID: 0,
      positions: {
        player: {
          x: (boardSize / 2) - (playerSize / 2),
          y: (boardSize / 2) - (playerSize / 2)
        },
        enemies: []
      }
    })
  }

  render() {
    const { paused, score, speed, timeElapsed, positions, enemyInterval, gameOver } = this.state
    const { boardSize, playerSize, enemySize } = this.props
    return (
      <div className="GameContainer">
        <Board boardSize={boardSize} playerSize={playerSize} paused={paused} gameOver={gameOver} startGame={this.startGame}>
          <User gameOver={gameOver} currentUser={this.props.currentUser} />
          <Player playerPosition={positions.player} playerSize={playerSize} handlePlayerMovement={this.handlePlayerMovement} />
          {this.state.positions.enemies.map(enemy => 
            <Enemy
              key={enemy.key}
              enemy={enemy}
              playerPosition={positions.player}
              enemySize={enemySize}
              gameOver={this.gameOver}
            />
          )}
          <GameStats score={score} time={timeElapsed} speed={speed} enemyInterval={enemyInterval}  />
        </Board>
      </div>
    )
  }

  componentDidMount() {
    this.startGame()
    document.onkeydown = (e) => {
      if (e.key === 'ArrowUp') {
        this.setState({
          up: true
        })
      }
    }
  }

  componentWillUnmount() {
    clearInterval(this.timeInterval)
    clearInterval(this.scoreInterval)
    clearInterval(this.enemyInterval)
    clearInterval(this.enemyCreationInterval)
  }
}

const mapState = (state) => ({
  currentUser: state.currentUser
})

export default connect(
  mapState, 
  { saveGame }
)(GameContainer)