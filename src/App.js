import React from 'react';
import './App.css';
import Board from './components/Board';
import NavBar from './components/NavBar';
import UsersContainer from './containers/UsersContainer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <h1 className="title">React Project</h1>
      <UsersContainer />
      <Board />
    </div>
  );
}

export default App;
