export const getAllMovies = () => {
  return fetch("https://rancid-tomatillos.herokuapp.com/api/v2/movies")
  .then(response => {
    if (response.status >= 400 && 500 >=response.status) {
      throw new Error("user error")
    } else if (response.status >= 500) {
      throw new Error("server error")
    } else {
      return response.json()
    }
  })
}

export const getMovie = (id) => {
  return fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}`)
  .then(response => {
    if (response.status >= 400 && 500 >=response.status) {
      throw new Error("user error")
    } else if (response.status >= 500) {
      throw new Error("server error")
    } else {
      return response.json()
    }
  })
}