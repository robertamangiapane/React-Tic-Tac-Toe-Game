describe("Player", function() {

beforeEach(function(){
  player = new Player()
})

  describe("turn_status", function(){
    it("return the initial status of player turn", function(){
      player.turn = "start"

      expect(player.turn_status()).toEqual("start")
    })

    it("return ended turn of player", function(){
      player.turn = "end"

      expect(player.turn_status()).toEqual("end")
    })
  })
})
