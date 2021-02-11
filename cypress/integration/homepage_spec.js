describe('As a user', () => {
  it('displays the home page', () => {
    cy.fixture("testMovieData.json")
      .then((response) => {
        cy.intercept("https://rancid-tomatillos.herokuapp.com/api/v2/movies", {
          statusCode: 200,
          body: response
        })
      })

    cy.visit('http://localhost:3000/')
    cy
    .get("header").should("have.text", "Rancid Tomatillos")

    .get("article").should('have.length', 2)
    .get("article").within(() => {
      cy.get("img")
      cy.get("p").contains("Rating")
      cy.get("p").contains("Released")
    })
  })

  it('takes in a search term and shows the matching movie', () => {
    cy.fixture("testMovieData.json")
      .then((response) => {
        cy.intercept("https://rancid-tomatillos.herokuapp.com/api/v2/movies", {
          statusCode: 200,
          body: response
        })
      })

    cy.visit('http://localhost:3000/')
    .get("form input[type=text]")
      .type('peninsula')
      .should('have.value', 'peninsula')
    .get("article").should('have.length', 1)
    .get("article img")
      .should('have.attr', 'src')
      .should("include", "https://image.tmdb.org/t/p/original//sy6DvAu72kjoseZEjocnm2ZZ09i.jpg")
    .get("article .movie-title")
      .contains("Peninsula")
    .get("article .movie-rating")
      .contains("Rating: 7.0")
    .get("article .movie-date")
      .contains("Released: 2020-07-15")
    .focused().clear()
    // .should("have.value", "Rogue")
  })

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
})