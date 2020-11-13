import React, { Component } from 'react';
import Board from '../components/Board';
import Player from '../components/Player';
import Enemy from '../components/Enemy';
import Instructions from '../components/Instructions'
import GameStats from '../components/GameStats';


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
      savedSpeed: null,
      paused: false,
      enemyID: 0,
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

    switch (e.keyCode) {
      case 38:  // Up arrow
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
      case 40:  // Down arrow
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
      case 37:  // Left arrow
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
      case 39:  // Right arrow
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
      case 32:  // Space bar
        this.pauseGame()
        break;
      default:
        return;
    }

  }

  randomSide = (min, max) => {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  createNewEnemy = () => {
    const { player } = this.state.positions
    const { boardSize, playerSize } = this.state
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
    const { boardSize, playerSize, speed, positions: {enemies}, positions: {player} } = this.state
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
    console.log("Game Started")
    this.createNewEnemy()
    this.timeInterval = setInterval(this.updateGame, 1000)
    this.enemyInterval = setInterval(this.updateEnemyPositions, 50)
    this.enemyCreationInterval = setInterval(this.createNewEnemy, 3000)
  }

  updateGame = () => {
    this.setState((state) => ({
      timeElapsed: state.timeElapsed + 1,
      score: state.score + 10
    }))
    if (this.state.timeElapsed % 5 === 0) {
      this.setState({
        speed: this.state.speed + 1
      })
    }
  }

  pauseWithSpace = (event) => {
    if (event.key === 32) {
      this.pauseGame()
    }
  }

  pauseGame = () => {
    if (!this.state.paused) {
      const { speed, timeElapsed } = this.state
      clearInterval(this.timeInterval)
      clearInterval(this.enemyCreationInterval)
      this.setState({
        paused: true,
        speed: 0,
        savedSpeed: speed,
        timeElapsed: 0,
        savedTime: timeElapsed
      })
      console.log(speed)
    } else {
      const { savedSpeed, savedTime } = this.state
      this.timeInterval = setInterval(this.updateGame, 1000)
      this.enemyCreationInterval = setInterval(this.createNewEnemy, 3000)
      this.setState({
        paused: false,
        speed: savedSpeed,
        timeElapsed: savedTime
      })
    }
  }

  gameOver = () => {
    console.log("Game Over")
    const { boardSize, playerSize } = this.props

    this.setState({
      score: 0,
      timeElapsed: 0,
      speed: 5,
      enemyID: 0,
      positions: {
        ...this.state.positions,
        player: {
          x: (boardSize / 2) - (playerSize / 2),
          y: (boardSize / 2) - (playerSize / 2)
        },
        enemies: []
      }
    })
  }

  render() {
    const { score, timeElapsed, boardSize, playerSize, positions } = this.state
    return (
      <div className="GameContainer">
        <Instructions />
        <Board boardSize={boardSize} playerSize={playerSize}>
          <div className="UserInfo">{this.props.children}</div>
          <Player playerPosition={positions.player} playerSize={playerSize} handlePlayerMovement={this.handlePlayerMovement} />
          {this.state.positions.enemies.map(enemy => 
            <Enemy
              key={enemy.key}
              enemy={enemy}
              playerPosition={positions.player}
              enemySize={playerSize}
              gameOver={this.gameOver}
            />
          )}
        <GameStats score={score} time={timeElapsed} />
        </Board>
      </div>
    )
  }


  componentDidMount() {
    this.startGame()
  }

  componentWillUnmount() {
    clearInterval(this.timeInterval)
    clearInterval(this.enemyInterval)
  }

}

export default GameContainer