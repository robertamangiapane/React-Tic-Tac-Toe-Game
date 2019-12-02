function Game(){
  this.playerX = new Player()
  this.playerO = new Player()
  this.gameover = false
  this.fields = ["", "", "", "", "", "", "", "", ""]
  this.turn = ""
  this.players = ["X", "O"]
  this.rows_columns = []

}

Game.prototype.start_game = function(){
  this.turn = this._random_turn()
  return this.turn
}

Game.prototype._random_turn = function(){
  player = ~~(Math.random() * this.players.length());
  return this.players[player];
}

Game.prototype.claim_field = function(index){
  if(this.fields[index] === "X" || this.fields[index] === "O") {
    throw 'Field already taken by Player' + this.fields[index]
  } else {
    this._set_game_over()
    this.fields = this._set_taken_field(index)
    this._check_gameover()
    return this.fields
  }
}

Game.prototype._check_gameover = function(){
  if(this.gameover === true){
    this.result()
  } else {
    this.turn = this._switch_player_turn()
  }
}

Game.prototype.result = function(){

  if (this.gameover === false){
    return "The game is not over yet!"
  } else if (this.gameover === true && this.playerX.result === "" && this.playerO.result === ""){
    return "It's a tie. Game Over!"
  } else if (this.gameover === true){
    return "PlayerX " + this.playerX.result + " PlayerO " +  this.playerO.result + " Game Over!"
  }
}

Game.prototype._set_game_over = function(){
  result = []
  this._rows_columns_matrix()

  this.rows_columns.forEach(function(row_column){
    result.push(this._countInArray(row_column, this.turn))
  }, this)

  if(result.includes(3)){
    this.gameover = true
    this._check_player_result()
  }else{
    if(!this.fields.includes("")){
      this.gameover = true
      this.playerX.result = ""
      this.playerO.result = ""
    }
  }
}

Game.prototype._set_taken_field = function(index){
  this.fields[index] = this.turn
  return this.fields
}

Game.prototype._switch_player_turn = function(){
  if(this.turn === "X"){
    return "O"
  } else {
    return "X"
  }
}

Game.prototype._check_player_result = function(){
  if(this.turn === "X"){
    this.playerX.result = "win!"
    this.playerO.result = "lose!"
  } else if(this.turn === "O"){
    this.playerO.result = "win!"
    this.playerX.result = "lose!"
  }
}

Game.prototype._rows_columns_matrix = function(){
  fields = this.fields.slice(0)
  fields_matrix = []
  while(fields.length){
    fields_matrix.push(fields.splice(0,3))
  }

  c = 0
  max = fields_matrix.length - 1

  row1 = []
  row2 = []
  row3 = []

  column1 = []
  column2 = []
  column3 = []

  diagonal1 = []
  diagonal2 = []

  i = 0
  for(c = 0; c <= max; c++){
    row1.push(fields_matrix[i][c])
    column1.push(fields_matrix[c][i])
  }

  i = 1
  for(c = 0; c <= max; c++){
    row2.push(fields_matrix[i][c])
    column2.push(fields_matrix[c][i])
  }

  i = 2
  for(c = 0; c <= max; c++){
    row3.push(fields_matrix[i][c])
    column3.push(fields_matrix[c][i])
  }

  for(c = 0; c <= max; c++){
    diagonal1.push(fields_matrix[c][c])
    diagonal2.push(fields_matrix[c][max-c])
  }

  this.rows_columns.push(row1, row2, row3, column1, column2, column3, diagonal1, diagonal2)

}

Game.prototype._countInArray = function(array, value){

  var count = 0;
  for (var i = 0; i < array.length; i++) {
      if (array[i] === value) {
          count++;
      }
  }
  return count;
}
