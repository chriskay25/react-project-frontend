import React, { Component } from "react";
import { connect } from "react-redux";
import { addUser } from "../actions/addUser";
import { Link } from "react-router-dom";

class SignupForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { history } = this.props;
    this.props.addUser(this.state, history);
    this.setState({
      username: "",
      password: "",
    });
  };

  render() {
    const { username, password } = this.state;
    return (
      <div className="FormBox">
        <form className="InputForm" onSubmit={this.handleSubmit}>
          <h2 style={{ padding: "1rem" }}>SIGN UP</h2>
          <div className="form-inputs">
            <label htmlFor="username">Username: </label>
            <input
              type="text"
              placeholder="Username"
              name="username"
              value={username}
              onChange={this.handleChange}
            />
            <br />
            <label htmlFor="password">Password: </label>
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={password}
              onChange={this.handleChange}
            />
            <br />
          </div>
          <input className="auth-submit" type="submit" />
        </form>
        <Link to="/auth/login" className="form-switch">
          Already have an account?
        </Link>
      </div>
    );
  }
}

export default connect(null, { addUser })(SignupForm);
