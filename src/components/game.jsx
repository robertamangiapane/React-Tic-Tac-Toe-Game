import React, { Component } from "react"
// import Board from './components/board';
import GameClass from "../gameClass"
import Board from "../board"

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      game : "",
      board : "",
      // this.turn = this.random_turn.bind(this)
      startNewGame : this.startNewGame.bind(this),
      displayBoard : this.displayBoard.bind(this)
    }
  }

  random_turn(){

  }

  startNewGame(){
    let newGame = new GameClass()
     this.setState({game: newGame})
     newGame.start_game()
     // this.displayBoard()
     // console.log(newGame)
     console.log(this.state.game)
  }

  render() {
    if(this.state.game !== "") {
      return(
        <div className="board">
        board
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
