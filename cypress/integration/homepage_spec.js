// switch over test contents to match the updated website
// add tests for error and loading screens
// move search bar
// hide search bar when on modal and when on error page (maybe loading page if easy)

// responsiveness
// deploy and readme


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
    .get("header").should("have.text", "Randy's Totoos")

    .get("article").should('have.length', 2)
    .get("article").within(() => {
      cy.get("img")
      cy.get("p").contains("Rating")
      cy.get("p").contains("Released")
    })
  })

  it('takes in a search term and shows the matching movie', () => {
    cy.fixture("testMovieData.json")
      .then((movie) => {
        cy.intercept("https://rancid-tomatillos.herokuapp.com/api/v2/movies", {
          statusCode: 200,
          body: movie
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
      .contains("Rating: 7.0/10.0")
    .get("article .movie-date")
      .contains("Released on 2020-07-15")
    .focused().clear()
    // .should("have.value", "Rogue")
  })
})