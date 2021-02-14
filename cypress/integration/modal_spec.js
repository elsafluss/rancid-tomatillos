describe('As a user', () => {
  it('displays a single movie\'s details', () => {
    cy.fixture("testSingleMovieData.json")
      .then((response) => {
        cy.intercept("https://rancid-tomatillos.herokuapp.com/api/v2/movies/581392", {
          statusCode: 200,
          body: response
        })
      })

    cy.visit('http://localhost:3000/')
      .get("article").eq(4).click()
      .url().should("eq", "http://localhost:3000/581392")
      .get(".modal img")
        .should('have.attr', 'src')
        .should("include", "https://image.tmdb.org/t/p/original//gEjNlhZhyHeto6Fy5wWy5Uk3A9D.jpg")
      .get(".modal .m-tagline")
        .contains("Escape The Apocalypse")
      .get(".modal .m-title")
        .contains("Peninsula")
      .get(".modal .m-date")
        .contains("Release Date: 2020-07-15")
      .get(".modal .m-rating")
        .contains("Average Rating: 7.0/10.0")
      .get(".modal .m-runtime")
        .contains("Runtime: 114 minutes")
      .get(".modal .m-overview")
        .contains("A soldier and his team battle hordes of post-apocalyptic zombies in the wastelands of the Korean Peninsula.")
      .get(".modal .m-genre")
        .contains("Horror")
      .get(".modal .m-budget")
        .contains("Budget: $17,000,000")
      .get(".modal .m-revenue")
        .contains("Revenue: $35,878,266")
      .get("button")
        .click()
      .url().should("eq", "http://localhost:3000/")
  })

  it('conditionally renders movie details', () => {
    cy.fixture("testSecondMovie.json")
      .then((movie) => {
        cy.intercept("https://rancid-tomatillos.herokuapp.com/api/v2/movies/718444", {
          statusCode: 200,
          body: movie
        })
      })

    cy.visit('http://localhost:3000/')
      .get("article").eq(2).click()
      .url().should("eq", "http://localhost:3000/718444")
      .get(".modal .m-budget")
        .contains("Budget not available")
      .get(".modal .m-revenue")
        .contains("Revenue not available")
      .get("button")
        .click()
      .url().should("eq", "http://localhost:3000/")
  })
})