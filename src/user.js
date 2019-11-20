function User() {
  this.turn = ""
}

User.prototype.turn_status = function() {
  return this.turn
}

User.prototype.claim_field = function() {
  return this.turn = "end"
}
