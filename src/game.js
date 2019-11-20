function Game(){
  this.userX = ""
  this.userO = ""
  this.gameover = false
}

Game.prototype.result = function(){
  if (this.gameover === true && this.userX === "win"){
    return "UserX win! UserO lose! Game Over!"
  } else if (this.gameover === true && this.userO === "win") {
    return "UserO win! UserX lose! Game Over!"
  } else if (this.gameover === true && this.userX === "" && this.userO === ""){
    return "It's a tie. Game Over!"
  } else if (this.gameover === false){
    return "The game is not over yet!"
  }
}
