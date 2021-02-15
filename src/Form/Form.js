import React from 'react';
import './Form.scss'
import PropTypes from 'prop-types'

function Form ({searchTerm, handleChange}) {
  return (
    <form aria-label="search">
      <input 
        id="search"
        type="text"
        placeholder="Search by title"
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