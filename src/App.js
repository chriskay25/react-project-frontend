import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";
import { Route, Switch, Redirect } from "react-router-dom";
import AuthForms from "./components/AuthForms";
import Home from "./components/Home";
import { getCurrentUser } from "./actions/getCurrentUser";
import NavBar from "./components/NavBar";

class App extends Component {
  render() {
    const { currentUser } = this.props;
    return (
      <div className="App">
        <NavBar currentUser={currentUser} />
        <Switch>
          <Route exact path="/">
            {currentUser ? <Redirect to="/home" /> : <Redirect to="/auth" />}
          </Route>
          <Route path="/auth">
            {currentUser ? <Redirect to="/home" /> : <AuthForms />}
          </Route>
          <Route path="/home">
            {currentUser ? (
              <Home currentUser={currentUser} />
            ) : (
              <Redirect to="/auth" />
            )}
          </Route>
        </Switch>
      </div>
    );
  }

  componentDidMount() {
    this.props.getCurrentUser();
  }
}

const mapState = (state) => ({
  currentUser: state.currentUser,
});

export default connect(mapState, { getCurrentUser })(App);
