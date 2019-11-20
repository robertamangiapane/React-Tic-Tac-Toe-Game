function Game(){
  this.playerX = ""
  this.playerO = ""
  this.gameover = false
  this.field = ""
  this.turn = ""
}

Game.prototype.result = function(){
  if (this.gameover === true && this.playerX.result === "win"){
    return "playerX win! playerO lose! Game Over!"
  } else if (this.gameover === true && this.playerO.result === "win") {
    return "playerO win! playerX lose! Game Over!"
  } else if (this.gameover === true && this.playerX.result === "" && this.playerO.result === ""){
    return "It's a tie. Game Over!"
  } else if (this.gameover === false){
    return "The game is not over yet!"
  }
}

Game.prototype.claim_field = function(){
  if(this.field.availability === "taken") {
    throw 'Field already taken'
  } else {
    this.field.availability = "taken"
    this.switch_player_turn()
    return "playerX turn ended."
  }
}

Game.prototype.switch_player_turn = function(){
  if(this.turn === "playerX"){
    this.playerX.turn = "end"
    this.playerO.turn = "start"
  } else {
    this.playerX.turn = "start"
    this.playerO.turn = "end"
  }
}
