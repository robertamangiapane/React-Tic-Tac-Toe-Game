describe("Game", function(){
  beforeEach(function(){
    game = new Game()
    game.playerX = jasmine.createSpy('player')
    game.playerO = jasmine.createSpy('player')
  })

  describe("claim_field", function(){
    it("let player X claim a field if is available", function(){
      game.fields = ["O", "", "", "", "", "", "", "", ""]
      game.turn = "X"

      expect(game.claim_field(1)).toEqual(["O", "X", "", "", "", "", "", "", ""])
    })

    it("throw an error if the field is already taken by PlayerX", function(){
      game.fields = ["X", "", "", "", "", "", "", "", ""]
      game.turn = "O"

      expect(function(){game.claim_field(0)}).toThrow('Field already taken by PlayerX')
    })

    it("throw an error if the field is already taken bu PlayerO", function(){
      game.fields = ["O", "", "", "", "", "", "", "", ""]
      game.turn = "X"

      expect(function(){game.claim_field(0)}).toThrow('Field already taken by PlayerO')
    })
  })

  // describe("result", function(){
  //   it("return playerX win", function(){
  //     game.fields = ["X", "X", "",
  //                    "", "", "",
  //                    "", "", ""]
  //     game.turn = "X"
  //     game.claim_field(2)
  //
  //
  //     expect(game.result()).toEqual("PlayerX win! PlayerO lose! Game Over!")
  //   })
  //
  //   it("return playerO win", function(){
  //     game.fields = ["O", "", "",
  //                    "", "O", "",
  //                    "", "", ""]
  //     game.turn = "O"
  //     game.claim_field(8)
  //
  //
  //     expect(game.result()).toEqual("PlayerX lose! PlayerO win! Game Over!")
  //   })
  //
  //   it("return a tie", function(){
  //     game.fields = ["O", "X", "O",
  //                    "O", "X", "X",
  //                    "X", "O", ""]
  //     game.turn = "O"
  //     game.claim_field(8)
  //
  //
  //     expect(game.result()).toEqual("It's a tie. Game Over!")
  //   })
  // })

  describe("start_game", function(){
    it("start the game with random turn for PlayerX", function(){
      spyOn(game, '_random_turn').and.returnValue("X")

      expect(game.start_game()).toEqual("X")
    })

    it("start the game with random turn for PlayerO", function(){
      spyOn(game, '_random_turn').and.returnValue("O")

      expect(game.start_game()).toEqual("O")
    })
  })

  describe("_switch_player_turn", function(){
    it("switch the turn of the PlayerX", function(){
      game.turn = "X"


      expect(game._switch_player_turn()).toEqual("O")

    })

    it("switch the turn of the PlayerO", function(){
      game.turn = "O"

      expect(game._switch_player_turn()).toEqual("X")
    })

  })

})
