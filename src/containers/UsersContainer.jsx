import React, { Component } from 'react';
// import { connect } from 'react-redux';
// eslint-disable-next-line no-unused-vars
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import User from '../components/User';
import UserForm from '../components/UserForm';
import UserLoginForm from '../components/UserLoginForm';
// import { fetchUsers } from '../actions/fetchUsers';

class UsersContainer extends Component {

  constructor() {
    super()
    this.state = {
      currentUser: null,
      loginForm: {
        username: "",
        password: ""
      }
    }
  }

  handleLoginFormSubmit = event => {
    event.preventDefault()
    const userInfo = this.state.loginForm
    const headers = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        user: userInfo
      })
    }
    fetch("http://localhost:3000/api/v1/login", headers)
      .then(resp => resp.json())
      .then(userJSON => {
        if (userJSON.error) {
          alert("Invalid Credentials")
        } else {
          this.setState({
            currentUser: userJSON
          })
        }
      })
      .catch(console.log)
  }

  handleLoginFormChange = event => {
    console.log(event.target)
    const { name, value } = event.target
    this.setState({
      loginForm: {
        ...this.state.loginForm,
        [name]: value
      }
    })
  }

  // findUser = () => {
  //   let user = this.props.users.filter(user => user.id == this.props.match.params.id)[0]
  // }

  render() {
    // console.log("UC: ", this.props.users)
    return (
      <div>
        <User />
        <UserLoginForm handleLoginFormChange={this.handleLoginFormChange} handleLoginFormSubmit={this.handleLoginFormSubmit} />
        <Route exact path="/users/new" component={UserForm} />
        <Route exact path="/users/:id" component={User} />
      </div>
    )
  }
}

// const mapStateToProps = state => {
//   return {
//     users: state.users
//   }
// }

export default UsersContainer