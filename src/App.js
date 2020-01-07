import React from 'react';

import './App.css';
import Navbar from './components/navbar';
import Game from './components/game';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Navbar/>
      <div className="rules">
      RULES: Players take turns putting their marks in empty squares.
      <br></br>
      The first player to get 3 of her marks in a row (up, down, across, or diagonally) is the winner.
      <br></br>
      When all 9 squares are full, the game is over.
      If no player has 3 marks in a row, the game ends in a tie.
      </div>
      </header>
      <div className="App-game">
      <Game/>
      </div>
    </div>
  );
}

export default App;
