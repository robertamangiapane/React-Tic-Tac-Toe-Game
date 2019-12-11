(function(exports) {

  function Game(){
  this.playerX = ""
  this.playerO = ""
  this.board = ""
  this.turn = ""
  this.result = ""
}

Game.prototype.start_game = function(){
  this.board = new Board()
  this.playerX = new Player()
  this.playerO = new Player()
  this.turn = random_turn()
  return this.turn
}

Game.prototype.claim_field = function(index){
  if (this.board.claim_field(this.turn, index) === 'Field claimed') {
    this.result = this._check_gameover()
  } else {
    this.result = this.board.claim_field(this.turn, index)
  }
  console.log(this.board.fields)
  return this.result
}

Game.prototype._winner = function(){
  if(this.turn === "X"){
    this.result = "Player X win. Player O lose."
  } else if(this.turn === "O"){
    this.result = "Player O win. Player X lose."
  }
  return this.result
}

Game.prototype._check_gameover = function(){
  result = ""
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

exports.Game = Game
})(this)

function random_turn(){
  players = ["X", "O"]
  player = ~~(Math.random() * players.length);
  return players[player];
}

function switch_player_turn(prev_turn){
  if(prev_turn === "X"){
    return "O"
  } else {
    return "X"
  }
}
