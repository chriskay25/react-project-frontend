import React, { Component } from 'react';
import { connect } from 'react-redux';
import { userLogin } from '../actions/userLogin';

class LoginForm extends Component {

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
    // const { username, password } = this.state
    this.props.userLogin(this.state)
    this.setState({
      username: '',
      password: '',
    })
  }

  render() {
    const { username, password } = this.state
    return (
      <div className="FormBox" >
        <h4 style={{padding: '1em'}}>LOGIN</h4>
        <form className="InputForm" onSubmit={this.handleSubmit}>
          <label htmlFor="username">Username: </label>
          <input type="text" placeholder="Username" name="username" value={username} onChange={this.handleChange} />
          <br />
          <label htmlFor="password">Password: </label>
          <input type="password" placeholder="Password" name="password" value={password} onChange={this.handleChange} />
          <br />
          <input type="submit" value="Login" />
        </form>
      </div>
    )
  }
}

export default connect(null, { userLogin })(LoginForm)