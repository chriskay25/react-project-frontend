import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addUser } from '../actions/addUser';

class SignupForm extends Component {

  state = {
    username: '',
    password: ''
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
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
      <>
        <h4>Create New User</h4>
        <form className="SignupForm" onSubmit={this.handleSubmit}>
          <label htmlFor="username">Username: </label>
          <input type="text" placeholder="Username" name="username" value={username} onChange={this.handleChange} />
          <br />
          <label htmlFor="password">Password: </label>
          <input type="password" placeholder="Password" name="password" value={password} onChange={this.handleChange} />
          <br />
          <input type="submit" />
        </form>
      </>
    )
  }
}

export default connect(null, { addUser })(SignupForm)