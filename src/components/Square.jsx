import React, { Component } from 'react';

class Square extends Component {

  squareColor = () => {
    switch (this.props.row % 2 === 0) {
      case true && this.props.column % 2 !== 0:
        return "lightcoral"
      default:
        return "cornsilk"
    }
  }

  render() {
    return (
      <div className="square" style={{backgroundColor: this.squareColor()}}>
        {this.props.row.toString() + "-" + this.props.column}
      </div>
    )
  }
}

export default Square;