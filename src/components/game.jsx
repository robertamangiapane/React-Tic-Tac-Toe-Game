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
      <div className="game">
      <button className="start-new-game" onClick={() => this.startNewGame()}>
      Start a new game
      </button>
      </div>
    )
  }
}
};

export default Game;
