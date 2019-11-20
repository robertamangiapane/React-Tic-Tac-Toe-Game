function Field() {
  this.availability = "empty"
}

Field.prototype.status = function() {
  return this.availability
}

Field.prototype.claim = function() {
  if(this.availability === "taken") {
    throw 'Field already taken'
  } else {
    return this.availability = "taken"
  }
}
