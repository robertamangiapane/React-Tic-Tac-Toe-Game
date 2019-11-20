describe("Game", function(){
  beforeEach(function(){
    game = new Game()
  })

  describe("result", function(){
    it("return UserX win", function(){
      game.userX = "win"
      game.userO = "lose"
      game.gameover = true

      expect(game.result()).toEqual("UserX win! UserO lose! Game Over!")
    })

    it("return UserO win", function(){
      game.userO = "win"
      game.userX = "lose"
      game.gameover = true

      expect(game.result()).toEqual("UserO win! UserX lose! Game Over!")
    })

    it("return a tie", function(){
      game.userO = ""
      game.userX = ""
      game.gameover = true

      expect(game.result()).toEqual("It's a tie. Game Over!")
    })

    it("return the game is not over yet", function(){
      game.userO = ""
      game.userX = ""
      game.gameover = false

      expect(game.result()).toEqual("The game is not over yet!")
    })
  })
})
