import React, { Component } from "react"
import Board from '../components/board';
import Result from '../components/result'
import Player from '../components/player'
import GameClass from "../gameClass";

class Game extends Component {
  constructor(props) {
    var newGame = new GameClass()
    super(props);
    this.state = {
      game: newGame,
      // turn : newGame.turn,
      // board: newGame.board,
      // result: newGame.result,
      // playerX : newGame.playerX,
      // playerO : newGame.playerO,
    };
    this.startNewGame = this.startNewGame.bind(this)
    this.handler = this.handler.bind(this)

  }
  handler() {
    this.setState({
    })
  }

  startNewGame(){
    var newGame = new GameClass()
    newGame.start_game()
    this.setState({
      game: newGame,
      // turn : newGame.turn,
      // result: newGame.result,
      // playerX : newGame.playerX,
      // playerO : newGame.playerO,
    })
  }

  render() {
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
        <div className="grid">
          <div className="turn-player-X">
          <Player game={this.state.game} player={this.state.game.playerX}/>
          </div>
          <div className="board">
          <Board game={this.state.game} handler = {this.handler} />
          </div>
          <div className="turn-player-O">
          <Player game={this.state.game} player={this.state.game.playerO}/>
          </div>
        </div>
        <div className="game-result">
          <Result game={this.state.game} handler = {this.handler}/>
        </div>
          <div className="new-game">
          <button className="start-new-game" onClick={() => this.startNewGame()}>
          Start a new game
          </button>
          </div>
        </div>
      )}
};

export default Game;
