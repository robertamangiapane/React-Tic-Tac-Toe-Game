describe("Board", function(){
    beforeEach(function(){
      board = new Board()
    })

  describe("claim_field", function(){
    it("throw an error if the index inpout is not in correct range", function(){

      expect(function(){board.claim_field("X", 10)}).toThrow('Input a valid field')
    })

    it("let player X claim a field if is available", function(){
      board.fields = ["O", "", "", "", "", "", "", "", ""]

      expect(board.claim_field("X", 1)).toEqual('Field claimed')
    })

    it("throw an error if the field is already taken by PlayerO", function(){
      board.fields = ["O", "", "", "", "", "", "", "", ""]

      expect(function(){board.claim_field("X", 0)}).toThrow('Field already taken by PlayerO')
    })
  })

})
