import React from 'react';
import './App.css';
import UsersContainer from './containers/UsersContainer';
import NavBar from './components/NavBar'
import SignupForm from './components/SignupForm'
import LoginForm from './components/LoginForm'
import Logout from './components/Logout'
import Logo from './components/Logo'
import { Route, Switch } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <NavBar />
      <Logo />
      <Switch>
        <Route exact path="/users/new" component={SignupForm} />
        <Route exact path="/login" component={LoginForm} />
      </Switch>
      <Switch>
      <Route exact path="/logout" component={Logout} />
      </Switch>
      {/* <UsersContainer /> */}
    </div>
  );
}

export default App;
