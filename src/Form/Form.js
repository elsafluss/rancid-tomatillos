import React, { Component } from 'react';

class Form extends Component {
  constructor() {
    super()
    this.state = {
      searchTerm: ''
    }
  }

  // searchMoviesHere = () => {
  //   this.props.searchMovies(this.state.searchTerm)
  // }

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