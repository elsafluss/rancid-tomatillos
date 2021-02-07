import React, { Component } from 'react';

class Form extends Component {
  constructor() {
    super()
    this.state = {
      searchTerm: ''
    }
  }

  handleChange = event => {
    this.setState({searchTerm: event.target.value})
    console.log(this.props.searchMovies(this.state.searchTerm))
    this.props.searchMovies(this.state.searchTerm)
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