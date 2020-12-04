import React, { Component } from 'react'

class Scores extends Component {

  state = {like: false}

  handleClick = () => {
    this.setState({
      like: !this.state.like
    })
  }

  render() {
    const {score} = this.props
    return(
      <div>
        {score}
        <button onClick={this.handleClick}>Like</button>
        <span>{this.state.like ? 1 : 0}</span>
      </div>
    )
  }
}

export default Scores

