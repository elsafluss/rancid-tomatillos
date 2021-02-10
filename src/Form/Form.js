import React, { Component } from 'react';

function Form ({searchTerm, handleChange}) {

  // searchMoviesHere = () => {
  //   this.props.searchMovies(this.state.searchTerm)
  // }
    return (
      <form labelFor="search">
        <input 
          id="search"
          type="text"
          placeholder="Search for a movie"
          value={searchTerm}
          onChange={(event) => handleChange(event)}
        />
      </form>
    )
}

export default Form