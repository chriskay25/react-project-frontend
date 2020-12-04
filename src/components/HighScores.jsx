import React, { Component } from 'react';
import Scores from './Scores'

class HighScores extends Component {

  getHighScores = () => {
    return ['100', '200', '300'].map(game => {
      return (
        <Scores score={game} />
      )
    })
  }

  render() {
   return (
      <div className="HighScores">
        {this.getHighScores()} 
      </div>
    ) 
  }
  
}

export default HighScores