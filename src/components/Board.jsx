import React, { Component } from 'react';
import Square from './Square';


class Board extends Component {

  renderSquare = (x,y) => {
    return (
      <Square row={x} column={y} />
    )
  }

  renderRow = (x) => {
    return (
      <tr row={x}>
        <td>{this.renderSquare(x, 1)}</td>
        <td>{this.renderSquare(x, 2)}</td>
        <td>{this.renderSquare(x, 3)}</td>
        <td>{this.renderSquare(x, 4)}</td>
        <td>{this.renderSquare(x, 5)}</td>
        <td>{this.renderSquare(x, 6)}</td>
        <td>{this.renderSquare(x, 7)}</td>
        <td>{this.renderSquare(x, 8)}</td>
      </tr>
    )
  }

  render() {
    return (
      <div className="board">
        <table>
          {this.renderRow(1)}
          {this.renderRow(2)}
          {this.renderRow(3)}
          {this.renderRow(4)}
          {this.renderRow(5)}
          {this.renderRow(6)}
          {this.renderRow(7)}
          {this.renderRow(8)}
        </table>
      </div>
    )
  }
}

export default Board;