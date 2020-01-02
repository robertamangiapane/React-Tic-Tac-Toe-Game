import BoardClass from "./boardClass"
import Player from "./player"

export default function GameClass(){
  this.playerX = ""
  this.playerO = ""
  this.board = ""
  this.turn = ""
  this.result = "Next round"
}

GameClass.prototype.start_game = function(){
  this.board = new BoardClass()
  this.playerX = new Player("")
  this.playerO = new Player("")
  this.turn = random_turn()
  return this.turn
}

GameClass.prototype.claim_field = function(index){
  if (this.board.claim_field(this.turn, index) === 'Field claimed') {
    this.result = this._check_gameover()
  } else {
    this.result = this.board.claim_field(this.turn, index)
  }
  return this.result
}

GameClass.prototype._winner = function(){
  if(this.turn === "X"){
    this.result = "Player X win. Player O lose."
  } else if(this.turn === "O"){
    this.result = "Player O win. Player X lose."
  }
  return this.result
}

GameClass.prototype._check_gameover = function(){
  var result = ""
  if(this.board.gameover === false) {
    this.turn = switch_player_turn(this.turn)
    result = "Next round"
  } else if(this.board.gameover === "tie"){
    result = "Game over. It's a tie."
  } else if(this.board.gameover === "winner"){
    result = this._winner()
  }
  return result
}


function random_turn(){
  var players = ["X", "O"]
  var player = ~~(Math.random() * players.length);
  return players[player];
}

function switch_player_turn(prev_turn){
  if(prev_turn === "X"){
    return "O"
  } else {
    return "X"
  }
}
