import React, { Component } from 'react';
import PropTypes from 'prop-types'

class Form extends Component {
  constructor() {
    super()
    this.state = {
      searchTerm: ''
    }
  }

  handleChange = event => {
    this.setState({searchTerm: event.target.value})
    this.props.searchMovies(event.target.value)
  }

  render() {
    return (
      <input 
        placeholder="Search for a movie"
        value={this.state.searchTerm}
        onChange={(event) => this.handleChange(event)}
      />
    )
  }
}

export default Form

Form.propTypes = {
  searchMovies: PropTypes.func
}