describe('The Home Page', function() {

  it('successfully loads', function() {
    cy.visit('http://localhost:3000/')
  })

  it('successfully loads', function(){

    cy.visit('http://localhost:3000/')
    cy.get('.home-page-title').contains('Welcome to Tic Tac Toe Game')
  })
})
