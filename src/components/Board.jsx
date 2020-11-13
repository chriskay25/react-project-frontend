import React, { Component } from 'react';

class Board extends Component {

  style = (props) => {
    const { boardSize } = this.props
    return {
      position: 'relative',
      width: `${boardSize}px`,
      height: `${boardSize}px`,
      margin: '0 auto',
      border: '10px white solid'
    }
  }

  render() {
    return (
      <div className="Board" style={this.style()}>
        {this.props.children}
      </div>
    )
  }
}

export default Board