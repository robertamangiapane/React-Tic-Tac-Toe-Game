import React, { Component } from "react"
import Board from '../components/board';
import GameClass from "../gameClass"
// import Board from "../board"

// var newGame = ""

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      game : "",
      board : "",
      turn : "",
      // test : "test",
      // playerO : "",
      // playerX : "",
      startNewGame : this.startNewGame.bind(this),
      // displayBoard : this.displayBoard.bind(this)
    }
  }

  startNewGame(){
    var newGame = new GameClass()
    newGame.start_game()
    // this.displayBoard()
    // let board = newGame.board
    newGame.board.fields[0] = "hello"
    this.setState({board: newGame.board})
    this.setState({turn: newGame.turn})
    this.setState({game: newGame})
    // console.log(newGame.board.fields)

    // console.log(this.state.board) non stampano nulla
    // console.log(this.state.game) non stampano nulla
  }

  render() {
    if(this.state.board !== "") {
      return(
        <div className="board">
        <Board game={this.state.game}/>
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
