export default function BoardClass() {
    this.fields = ["", "", "", "", "", "", "", "", ""]
    this.rows_columns = []
    this.gameover = ""
  }

BoardClass.prototype.claim_field = function(turn, index) {
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

function check_gameover(rows_columns, turn, fields) {
  var result = check_rows_columns(rows_columns, turn, fields)

  if(result.includes(3)){
    return "winner"
  } else if (!fields.includes("")){
    return "tie"
  } else {
    return false
  }
}

function check_rows_columns(rows_columns, turn) {
  var result = []

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
  var rows_and_columns = []
  var fields_slice = fields.slice(0)
  var fields_matrix = []
  while(fields_slice.length){
    fields_matrix.push(fields_slice.splice(0,3))
  }

  var c = 0
  var max = fields_matrix.length - 1

  var row1 = []
  var row2 = []
  var row3 = []

  var column1 = []
  var column2 = []
  var column3 = []

  var diagonal1 = []
  var diagonal2 = []

  var i = 0
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
