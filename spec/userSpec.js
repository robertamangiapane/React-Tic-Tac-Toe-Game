describe("User", function() {

beforeEach(function(){
  user = new User()
})

  describe("turn_status", function(){
    it("return the status of user turn", function(){
      user.turn = "start"

      expect(user.turn_status()).toEqual("start")
    })
  })

  describe("claim_field", function(){
    it("user claim the field for the turn", function(){
      user.claim_field()

      expect(user.turn_status()).toEqual("end")
    })
  })
})
