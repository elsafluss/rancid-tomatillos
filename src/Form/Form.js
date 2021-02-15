import React from 'react';
import PropTypes from 'prop-types'

function Form ({searchTerm, handleChange}) {
  return (
    <label>
      <form aria-label="search">
        <input 
          id="search"
          type="text"
          placeholder="Search by title"
          value={searchTerm}
          onChange={(event) => handleChange(event)}
        />
      </form>
    </label>
  )
}

export default Form

Form.propTypes = {
  searchMovies: PropTypes.func
}