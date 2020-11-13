import React, { Component } from 'react';
import imageMask from '../pause-square-1.png';
import boardBackground from '../assets/cheap_diagonal_fabric.png';

class Board extends Component {

  style = (props) => {
    const { boardSize, paused } = this.props
    return paused ? ({
      position: 'relative',
      width: `${boardSize}px`,
      height: `${boardSize}px`,
      margin: '0 auto',
      border: '10px black solid',
      backgroundImage: `radial-gradient(orange, lightblue)`
    }) : ({
      position: 'relative',
      width: `${boardSize}px`,
      height: `${boardSize}px`,
      margin: '0 auto',
      border: '10px lightblue solid',
      backgroundImage: `url(${boardBackground})`
    }
    )
  }

  render() {
    const { paused } = this.props
    return (
      <div className="Board" style={this.style()}>
        {this.props.children}
        <p className="PausedText">
          {paused ? 'Paused' : null}
        </p>
      </div>
    )
  } 
}

export default Board