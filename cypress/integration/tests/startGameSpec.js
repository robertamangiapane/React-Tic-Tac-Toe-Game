describe('Player can start new game', function() {
  beforeEach(function(){
    cy.visit('http://localhost:3000/')
  })

  it('successfully start a new game', function() {
    cy.get('.start-new-game').click()
    cy.get('.new-game').contains('Player 1 turn')
  })
})
