import React, { Component } from "react";
import enemyCircle from "../assets/Circle-2.png";

class Enemy extends Component {
  rotation = () => {
    const { direction } = this.props.enemy;
    if (direction === "Up") return "rotate(180deg)";
    if (direction === "Down") return "rotate(0deg)";
    if (direction === "Left") return "rotate(90deg)";
    if (direction === "Right") return "rotate(270deg)";
  };

  style = () => {
    const { x, y } = this.props.enemy;
    const { enemySize } = this.props;
    return {
      position: "absolute",
      left: `${x}px`,
      top: `${y}px`,
      width: `${enemySize}px`,
      transform: this.rotation(),
    };
  };

  render() {
    return (
      <img
        className="enemy"
        src={enemyCircle}
        alt="Enemy"
        style={this.style()}
      />
    );
  }

  componentDidUpdate() {
    const { enemySize, playerPosition, enemy } = this.props;
    if (
      playerPosition.x < enemy.x + enemySize &&
      playerPosition.y < enemy.y + enemySize &&
      playerPosition.x + enemySize > enemy.x &&
      playerPosition.y + enemySize > enemy.y
    ) {
      this.props.gameOver();
    }
  }
}

export default Enemy;
