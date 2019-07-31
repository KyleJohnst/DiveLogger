import React from 'react';
import './App.css';
import DiveLogContainer from './containers/DiveLogContainer';

function App() {
  return (
    <div className="App">
      <>
      <h1 id = "AppHeader">My Dive Log</h1>
      <DiveLogContainer/>
      </>
    </div>
  );
}

export default App;
