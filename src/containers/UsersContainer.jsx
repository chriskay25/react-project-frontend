import React, { Component } from 'react';
// import { connect } from 'react-redux';
// eslint-disable-next-line no-unused-vars
import User from '../components/User';
import GameContainer from './GameContainer';
import NavBar from '../components/NavBar';
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

  componentDidMount() {
    const token = localStorage.getItem('token')
    if (token) {
      fetch('http://localhost:3000/api/v1/get_current_user', {
        headers: {
          'Authorization': token,
        }
      })
        .then(resp => resp.json())
        .then(user => {
          console.log("Component Did Mount: ", user)
          if (user.error) {
            alert(user.error)
          } else {
            this.setState({
              currentUser: user
            }) 
          }
        })
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
        console.log("User JSON returned from login: ", userJSON)
        if (userJSON.error) {  // in case there are server errors
          alert("Invalid Credentials")
        } else {
          localStorage.setItem('token', userJSON.jwt)
          this.setState({
            currentUser: userJSON.user,
          })
        }
      })
      .catch(console.log)   // in case there are JS errors
  }

  handleFormChange = event => {
    const { name, value } = event.target
    this.setState({
      loginForm: {
        ...this.state.loginForm,
        [name]: value
      }
    })
  }

  handleLogout = event => {
    event.preventDefault()
    localStorage.removeItem('token')
    this.setState({
      currentUser: null
    })
  }


  render() {
    const { currentUser } = this.state
    const win = window.visualViewport.width * .7
    const boardSize = win > 850 ? 850 : win
    const playerSize = boardSize / 30
    if (currentUser) {
      return (
        <>
          <NavBar loggedIn={true} handleLogout={this.handleLogout} />
          <GameContainer boardSize={boardSize} playerSize={playerSize}>
            <User currentUser={currentUser}/>
          </GameContainer>
        </>
      )
    } else {
      return (
        <div>
          <NavBar loggedIn={false} handleFormChange={this.handleFormChange} handleLoginFormSubmit={this.handleLoginFormSubmit} />
        </div>
      )
    }
  }
}

export default UsersContainer