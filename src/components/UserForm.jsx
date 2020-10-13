import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addUser } from '../actions/addUser';

class UserForm extends Component {

  state = {
    username: '',
    password: ''
  }

  handleChange = (event) => {
    console.log(this.props.addUser)
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    // console.log(this.props)
    event.preventDefault()
    const { username, password } = this.state
    this.props.addUser({ username, password })
    this.setState({
      username: '',
      password: '',
    })
  }

  render() {
    const { username, password } = this.state
    return (
      <div>
        {username} {password}
        <h4>Create New User</h4>
        <form onSubmit={this.handleSubmit}>
          <label>Username: </label>
          <input type="text" placeholder="Username" name="username" value={this.state.username} onChange={this.handleChange} />
          <br />
          <label>Password: </label>
          <input type="password" placeholder="Password" name="password" value={this.state.password} onChange={this.handleChange} />
          <br />
          <input type="submit" />
        </form>
      </div>
    )
  }
}

export default connect(null, { addUser })(UserForm)