import React from 'react';
import { 
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import './App.css';
// import {connect} from 'react-redux';
import Board from './components/Board';
import UserForm from './components/UserForm';
import NavBar from './components/NavBar';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Route exact path="/users/new" component={UserForm} />
        <h1 className="title">React Project</h1>
        <Board />
      </div>
    </Router>
  );
}

export default App;
