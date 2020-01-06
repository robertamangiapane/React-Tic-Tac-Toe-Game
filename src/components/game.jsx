import React, { Component } from "react"
import Board from '../components/board';
import GameClass from "../gameClass";

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      game : "",
      board : "",
      startNewGame : this.startNewGame.bind(this),
    }
  }

  startNewGame(){
    var newGame = new GameClass()
    newGame.start_game()
    this.setState({
      board: newGame.board,
      game: newGame,
    })
  }

  render() {
    if(this.state.game !== "") {
      return(
        <div>
        <div className="rules">
        RULES: Players take turns putting their marks in empty squares.
        <br></br>
        The first player to get 3 of her marks in a row (up, down, across, or diagonally) is the winner.
        <br></br>
        When all 9 squares are full, the game is over.
        If no player has 3 marks in a row, the game ends in a tie.
        </div>
        <div className="game">
        <button className="start-new-game" onClick={() => this.startNewGame()}>
        Start a new game
        </button>
        </div>
          <div className="board">
          <Board game={this.state.game}/>
          </div>
        </div>
      )} else{
    return(
      <div>
      <div className="rules">
      RULES: Players take turns putting their marks in empty squares.
      <br></br>
      The first player to get 3 of her marks in a row (up, down, across, or diagonally) is the winner.
      <br></br>
      When all 9 squares are full, the game is over.
      If no player has 3 marks in a row, the game ends in a tie.
      </div>
      <div className="game">
      <button className="start-new-game" onClick={() => this.startNewGame()}>
      Start a new game
      </button>
      </div>
      </div>
    )
  }
}
};

export default Game;
