import React, { Component } from 'react';
import Square from './Square';


class Board extends Component {

  renderSquare = (i) => {
    return (
      <Square value={i} />
    )
  }
  render() {
    return (
      <div className="board">
        <table>
          <tr>
            <td>{this.renderSquare(1)}</td>
            <td>{this.renderSquare(2)}</td>
            <td>{this.renderSquare(3)}</td>
            <td>{this.renderSquare(4)}</td>
            <td>{this.renderSquare(5)}</td>
            <td>{this.renderSquare(6)}</td>
            <td>{this.renderSquare(7)}</td>
            <td>{this.renderSquare(8)}</td>
          </tr>
        </table>
      </div>
    )
  }
}

export default Board;