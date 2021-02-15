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

    it('displays an server error screen', () => {
      cy.fixture("testMovieData.json")
        .then((response) => {
          
          cy.intercept("https://rancid-tomatillos.herokuapp.com/api/v2/movies", {
            statusCode: 500,
            body: response
          })
        })
        cy.visit('http://localhost:3000/')
        cy
        .get("section")
        .get("h2").should("have.text", "This page is borked!")
        .get("img")
          .should("have.attr", "src")
          .should("include", "https://media.giphy.com/media/10u6gt11vnm812/giphy.gif")
        .get("h3")
      })

    it('displays an user error screen', () => {
      cy.fixture("testMovieData.json")
        .then((response) => {
          
          cy.intercept("https://rancid-tomatillos.herokuapp.com/api/v2/movies/", {
            statusCode: 404,
            body: response
          })
        })
        cy.visit('http://localhost:3000/909090')
        cy
        .get("section")
        .get("h2").should("have.text", "This page is borked!")
        .get("img")
          .should("have.attr", "src")
          .should("include", "https://media.giphy.com/media/10u6gt11vnm812/giphy.gif")
        .get("h3").first().click()
        .url().should("eq", "http://localhost:3000/")
      })
  })