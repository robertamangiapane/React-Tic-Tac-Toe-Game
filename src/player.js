function Player() {
  this.turn = false
  this.result = ""
}

Player.prototype.turn_status = function() {
  return this.turn
}
