import React from 'react';
import './App.css';
import UsersContainer from './containers/UsersContainer';

function App() {
  return (
    <div className="App">
      <h1 style={{textAlign: 'center'}}>JUKE</h1>
      <UsersContainer />
    </div>
  );
}

export default App;
