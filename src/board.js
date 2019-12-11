(function(exports) {

  function Board() {
    this.fields = ["", "", "", "", "", "", "", "", ""]
    this.rows_columns = []
    this.gameover = ""
  }

Board.prototype.claim_field = function(turn, index) {
  if(index < 0 || index > 8 || index === undefined){
    throw 'Input a valid field'
  } else if(this.fields[index] === "X" || this.fields[index] === "O") {
    throw 'Field already taken by Player' + this.fields[index]
  } else {
    this.fields[index] = turn
    this.rows_columns = rows_columns_matrix(this.fields)
    this.gameover = check_gameover(this.rows_columns, turn, this.fields)
    return 'Field claimed'
  }
}

exports.Board = Board
  })(this)

function check_gameover(rows_columns, turn, fields) {
  result = check_rows_columns(rows_columns, turn, fields)

  if(result.includes(3)){
    return "winner"
  } else if (!fields.includes("")){
    return "tie"
  } else {
    return false
  }
}

function check_rows_columns(rows_columns, turn) {
  result = []

  rows_columns.forEach(function(row_column){
    result.push(countInArray(row_column, turn))
  }, this)
  return result
}

function countInArray(array, value) {
  var count = 0;
  for (var i = 0; i < array.length; i++) {
      if (array[i] === value) {
          count++;
      }
  }
  return count;
}

function rows_columns_matrix(fields) {
  rows_and_columns = []
  fields_slice = fields.slice(0)
  fields_matrix = []
  while(fields_slice.length){
    fields_matrix.push(fields_slice.splice(0,3))
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

  rows_and_columns.push(row1, row2, row3, column1, column2, column3, diagonal1, diagonal2)
  return rows_and_columns
}
