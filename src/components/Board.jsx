import React, { Component } from 'react';

class Board extends Component {

  style = (props) => {
    return {
      position: 'relative',
      width: `${this.props.boardSize}px`,
      height: `${this.props.boardSize}px`,
      margin: '0 auto',
      border: '5px black solid'
    }
  }

  render() {
    return (
      <div className="CanvasComponent" style={this.style()}>
        {this.props.children}
      </div>
    )
  }
}

export default Board