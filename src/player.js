function Player() {
  this.turn = ""
  this.result = ""
}

Player.prototype.turn_status = function() {
  return this.turn
}
