describe("Game", function(){
  beforeEach(function(){
    game = new Game()
    game.playerX = jasmine.createSpy('player')
    game.playerO = jasmine.createSpy('player')
  })

  describe("result", function(){
    it("return playerX win", function(){
      game.playerX.result = "win"
      game.playerO.result = "lose"
      game.gameover = true

      expect(game.result()).toEqual("PlayerX win! PlayerO lose! Game Over!")
    })

    it("return playerO win", function(){
      game.playerO.result = "win"
      game.playerX.result = "lose"
      game.gameover = true

      expect(game.result()).toEqual("PlayerO win! PlayerX lose! Game Over!")
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
    it("let player X claim a field if is available", function(){
      game.turn = "X"

      expect(game.claim_field(1)).toEqual("Turn ended.")
    })

    it("field is claimed by the player X", function(){
      game.turn = "X"
      game.claim_field(1)

      expect(game.fields[1]).toEqual("X")
    })

    it("throw an error if the field is already taken bu PlayerX", function(){
      game.fields[1] = "X"

      expect(function(){game.claim_field(1)}).toThrow('Field already taken by PlayerX')
    })

    it("throw an error if the field is already taken bu PlayerO", function(){
      game.fields[1] = "O"

      expect(function(){game.claim_field(1)}).toThrow('Field already taken by PlayerO')
    })
  })

  describe("_switch_player_turn", function(){
    it("switch the turn of the PlayerX", function(){
      game.turn = "X"
      game._switch_player_turn()

      expect(game.playerX.turn).toEqual(false)
      expect(game.playerO.turn).toEqual(true)

    })

    it("switch the turn of the PlayerO", function(){
      game.turn = "O"
      game._switch_player_turn()

      expect(game.playerO.turn).toEqual(false)
      expect(game.playerX.turn).toEqual(true)
    })

  })

  describe("_set_first_turn", function(){
    it("start the game with random turn for PlayerX", function(){
      spyOn(game, '_random_turn').and.returnValue("X")
      game._set_first_turn()

      expect(game.playerX.turn).toEqual(true)
    })

    it("start the game with random turn for PlayerO", function(){
      spyOn(game, '_random_turn').and.returnValue("O")
      game._set_first_turn()

      expect(game.playerO.turn).toEqual(true)
    })
  })
})
