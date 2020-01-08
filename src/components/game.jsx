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
    })
  }

  render() {
      return(
        <div>
        <div className="grid">
          <div className="turn-player-X">
          <Player game={this.state.game} player={this.state.game.playerX}/>
          <Result game={this.state.game} handler={this.handler} player={this.state.game.playerX}/>
          </div>

          <div className="board">
          <Board game={this.state.game} handler = {this.handler} />
          </div>

          <div className="turn-player-O">
          <Player game={this.state.game} player={this.state.game.playerO}/>
          <Result game={this.state.game} handler={this.handler} player={this.state.game.playerO}/>
          </div>

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
