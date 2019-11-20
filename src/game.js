function Game(){
  this.playerX = new Player()
  this.playerO = new Player()
  this.gameover = false
  this.fields = ["", "", "", "", "", "", "", "", ""]
  this.turn = ""
  this.players = ["X", "O"]
}

Game.prototype._set_first_turn = function(){
  this.turn = this._random_turn()
  if(this.turn === "X"){
    this.playerX.turn = true
    this.playerO.turn = false
  } else {
    this.playerX.turn = false
    this.playerO.turn = true
  }
  return this.turn
}

Game.prototype.result = function(){
  if (this.gameover === true && this.playerX.result === "win"){
    return "PlayerX win! PlayerO lose! Game Over!"
  } else if (this.gameover === true && this.playerO.result === "win") {
    return "PlayerO win! PlayerX lose! Game Over!"
  } else if (this.gameover === true && this.playerX.result === "" && this.playerO.result === ""){
    return "It's a tie. Game Over!"
  } else if (this.gameover === false){
    return "The game is not over yet!"
  }
}

Game.prototype.claim_field = function(index){

  if(this.fields[index] === "X" || this.fields[index] === "O") {
    throw 'Field already taken by Player' + this.fields[index]
  } else {
    this._set_taken_field(index)
    this._switch_player_turn()
    return "Turn ended."
  }
}

Game.prototype._switch_player_turn = function(){
  if(this.turn === "X"){
    this.playerX.turn = false
    this.playerO.turn = true
    return this.turn = "O"
  } else {
    this.playerX.turn = true
    this.playerO.turn = false
    return this.turn = "X"
  }
}

Game.prototype._set_taken_field = function(index){
  this.fields[index] = this.turn

}

Game.prototype._random_turn = function(){
  player = ~~(Math.random() * this.players.length());
  return this.players[player];
}
