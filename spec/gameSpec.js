describe("Game", function(){
  beforeEach(function(){
    game = new Game()
    game.board = jasmine.createSpy('board')
    game.start_game()
  })

  describe("start_game", function(){
    it("start the game with random turn for PlayerX", function(){
      spyOn(window, 'random_turn').and.returnValue("X")

      expect(game.start_game()).toEqual("X")
    })
  })

  describe("claim_field", function(){
    it("let player X claim a field", function(){
      game.board.fields = ["O", "", "", "", "", "", "", "", ""]
      game.board.gameover = false
      game.turn = "X"
      index = 1
      spyOn(game.board, 'claim_field').withArgs(game.turn, index).and.returnValue("Field claimed")

      expect(game.claim_field(1)).toEqual("Next round")
    })
  })

})
