describe('As a user', () => {
  it('displays the home page', () => {
    cy.visit('http://localhost:3000/')
    
    .get('form input[type=text]')
    .get("header").contains("h1", "Rancid Tomatillos")
    .get("article").should('have.length', 40)
    .get("article").within(() => {
      cy.get("img")
      cy.get("p").contains("Rating")
      cy.get("p").contains("Released")
    })
  })
})