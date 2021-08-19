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
    const { boardSize } = this.props
    const playerSize = (boardSize / 30)
    this.state = {
      playerSize: playerSize,
      enemySize: playerSize,
      gameOver: true,
      score: 0,
      newHighScore: false,
      timeElapsed: 0,
      speed: 5,
      bombs: 3,
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

  handleKeyDown = (e) => {
    switch (e.key) {
      case 'ArrowUp': 
        this.setState({
          up: true
        })
        break;
      case 'ArrowDown':
        this.setState({
          down: true
        })
        break;
      case 'ArrowLeft':
        this.setState({
          left: true
        })
        break;
      case 'ArrowRight':
        this.setState({
          right: true
        })
        break;
      case 'Shift':
        this.useBomb()
        break;
      case ' ':
        this.pauseGame()
        break;
      default:
        return;
    }
  }

  handleKeyUp = (e) => {
    switch (e.key) {
      case 'ArrowUp': 
        this.setState({
          up: false
        })
        break;
      case 'ArrowDown':
        this.setState({
          down: false
        })
        break;
      case 'ArrowLeft':
        this.setState({
          left: false
        })
        break;
      case 'ArrowRight':
        this.setState({
          right: false
        })
        break;
      default:
        return;
    }
  }

  handlePlayerMovement = (e) => {
    const { paused } = this.state
    const { x, y } = this.state.positions.player
    const { boardSize } = this.props
    const { up, down, left, right, playerSize } = this.state

    if (up && y >= 0 && !paused) {
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

    if (down && (y < boardSize - playerSize) && !paused) {
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

    if (left && x > 0 && !paused) {
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

    if (right && (x < (boardSize - playerSize)) && !paused) {
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

  }

  randomSide = (min, max) => {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  createNewEnemy = () => {
    const { player } = this.state.positions
    const { boardSize } = this.props
    const { playerSize, enemyInterval, gameOver, paused } = this.state
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

    if (!gameOver && !paused) {
      this.enemyCreationInterval = setTimeout(this.createNewEnemy, enemyInterval)
    }
  }

  updateEnemyPositions = () => {
    const { speed, playerSize, positions: {enemies} } = this.state
    const { boardSize } = this.props
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
      newHighScore: false,
      gameOver: false,
      score: 0,
      bombs: 3
    })
    const { enemyInterval } = this.state
    this.timeInterval = setInterval(this.updateTime, 1000)
    this.scoreInterval = setInterval(this.updateScore, 100)
    this.enemyInterval = setInterval(this.updateEnemyPositions, 50)
    this.playerInterval = setInterval(this.handlePlayerMovement, 20)
    this.enemyCreationInterval = setTimeout(this.createNewEnemy, enemyInterval)
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
    } 
    
    if (this.state.timeElapsed % 5 === 0) {
      this.setState({
        enemyInterval: this.state.enemyInterval - 100
      })
    }
  }

  updateScore = () => {
    this.setState((state) => ({
      score: state.score + 1
    }))
  }

  useBomb = () => {
    const { bombs } = this.state
    if (bombs > 0) {
      this.setState({
        positions: {
          ...this.state.positions,
          enemies: []
        }
      })
      this.setState((state) => ({
        bombs: state.bombs - 1
      }))
    }
  }

  pauseGame = () => {
    const { gameOver, paused, score, speed, timeElapsed, enemyInterval } = this.state

    if (gameOver) return
    if (!paused) {
      clearInterval(this.timeInterval)
      clearInterval(this.scoreInterval)
      clearTimeout(this.enemyCreationInterval)
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
      this.enemyCreationInterval = setTimeout(this.createNewEnemy, savedInterval)
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
    if (score > this.props.currentUser.highScore) {
      this.setState({
        newHighScore: true
      })
    }
    this.resetGame()
  }

  resetGame = () => {
    clearInterval(this.timeInterval)
    clearInterval(this.scoreInterval)
    clearInterval(this.enemyInterval)
    clearInterval(this.enemyCreationInterval)
    clearInterval(this.playerInterval)

    const { boardSize } = this.props
    const playerSize = boardSize / 30

    this.setState({
      playerSize: playerSize,
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
    const { paused, score, speed, timeElapsed, positions, enemyInterval, gameOver, playerSize, enemySize, newHighScore, bombs } = this.state
    const { boardSize, currentUser, highScore } = this.props
    return (
      <div className="GameContainer">
        <Board boardSize={boardSize} playerSize={playerSize} paused={paused} gameOver={gameOver} startGame={this.startGame}>
          <User gameOver={gameOver} currentUser={currentUser} highScore={highScore} newHighScore={newHighScore} bombs={bombs} />
          <Player playerPosition={positions.player} playerSize={playerSize} handleKeyDown={this.handleKeyDown} handleKeyUp={this.handleKeyUp} gameOver={gameOver} />
          {this.state.positions.enemies.map(enemy => 
            <Enemy
              key={enemy.key}
              enemy={enemy}
              playerPosition={positions.player}
              enemySize={enemySize}
              gameOver={this.gameOver}
            />
          )}
          <GameStats score={score} time={timeElapsed} speed={speed} enemyInterval={enemyInterval} gameOver={gameOver} />
        </Board>
      </div>
    )
  }

  componentDidMount() {
    this.startGame()
  }

  componentWillUnmount() {
    clearInterval(this.timeInterval)
    clearInterval(this.scoreInterval)
    clearInterval(this.enemyInterval)
    clearInterval(this.enemyCreationInterval)
    clearInterval(this.playerInterval)
  }
}

const mapState = (state) => ({
  currentUser: state.currentUser,
  highScore: state.highScore
})

export default connect(
  mapState, 
  { saveGame }
)(GameContainer)