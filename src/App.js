import React from 'react';

import './App.css';
import Navbar from './components/navbar';
import Game from './components/game';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Navbar/>
      </header>
      <div>
      <Game/>
      </div>
    </div>
  );
}

export default App;
