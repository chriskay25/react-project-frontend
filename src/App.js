import React from 'react';
import './App.css';
// import {connect} from 'react-redux'
import Board from './components/Board'

function App() {
  return (
    <div className="App">
      <h1 className="title">React Project</h1>
      <Board />
    </div>
  );
}

export default App;
