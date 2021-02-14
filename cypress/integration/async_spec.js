describe('As a user', () => {
  it('displays a loading screen', () => {
    cy.fixture("testMovieData.json")
      .then((response) => {
        
        cy.intercept("https://rancid-tomatillos.herokuapp.com/api/v2/movies", {
          delay: 5000,
          statusCode: 200,
          body: response
        })
      })
      cy.visit('http://localhost:3000/')
      cy
      .get("section")
      .get("h2").should("have.text", "Please be patient, we're changing the reel!")
      .get("img")
        .should("have.attr", "src")
        .should("include", "https://media.giphy.com/media/ppyvw6iUQjdja/giphy.gif")
    })
  })