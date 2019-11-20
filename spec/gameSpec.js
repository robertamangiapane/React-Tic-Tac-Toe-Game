describe("Game", function(){
  beforeEach(function(){
    game = new Game()
    game.playerX = jasmine.createSpy('player')
    game.playerO = jasmine.createSpy('player')
    game.field = jasmine.createSpy('field')
  })

  describe("result", function(){
    it("return playerX win", function(){
      game.playerX.result = "win"
      game.playerO.result = "lose"
      game.gameover = true

      expect(game.result()).toEqual("playerX win! playerO lose! Game Over!")
    })

    it("return playerO win", function(){
      game.playerO.result = "win"
      game.playerX.result = "lose"
      game.gameover = true

      expect(game.result()).toEqual("playerO win! playerX lose! Game Over!")
    })

    it("return a tie", function(){
      game.playerO.result = ""
      game.playerX.result = ""
      game.gameover = true

      expect(game.result()).toEqual("It's a tie. Game Over!")
    })

    it("return the game is not over yet", function(){
      game.playerO.result = ""
      game.playerX.result = ""
      game.gameover = false

      expect(game.result()).toEqual("The game is not over yet!")
    })
  })

  describe("claim_field", function(){
    it("let a player claim a field if is available", function(){
      game.field.availability = "empty"

      expect(game.claim_field()).toEqual("playerX turn ended.")
    })

    it("throw an error if the field is already taken", function(){
      game.field.availability = "taken"

      expect(function(){game.claim_field()}).toThrow('Field already taken')
    })
  })

  describe("switch_player_turn", function(){
    it("switch the turn of a player", function(){
      game.turn = "playerX"
      game.switch_player_turn()

      expect(game.playerX.turn).toEqual("end")

    })
  })
})
