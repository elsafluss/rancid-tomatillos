import React from 'react';
import PropTypes from 'prop-types'

function Form ({searchTerm, handleChange}) {
  handleChange = event => {
    this.setState({searchTerm: event.target.value})
    this.props.searchMovies(event.target.value)
  }

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

Form.propTypes = {
  searchMovies: PropTypes.func
}