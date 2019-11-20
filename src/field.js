function Field() {
  this.availability = "empty"
}

Field.prototype.status = function() {
  return this.availability
}
