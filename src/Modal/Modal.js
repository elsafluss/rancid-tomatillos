import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { getMovie } from '../util.js';
import { Link } from 'react-router-dom'
import './Modal.scss';

class Modal extends Component {
  constructor() {
    super();
    this.state = {
      foundMovie: null
    }
  }

  componentDidMount() {
    getMovie(this.props.id)
    .then(movie => this.setState({foundMovie: movie.movie}))
    .catch(error => console.log(error))
  }

  render() {
    const foundMovie = this.state.foundMovie
    return (
      (!foundMovie) ? <p>No movie clicked yet</p> : 
      <section className="modal">
        <img src={foundMovie.backdrop_path} alt="movie backdrop"/>
        <div className="m-data">
          <p className="m-tagline">{foundMovie.tagline}</p>
          <h2 className="m-title">{foundMovie.title}</h2>
          <p className="m-date">Release Date: {foundMovie.release_date}</p>
          <p className="m-rating">Average Rating: {foundMovie.average_rating.toFixed(1)}/10.0</p>
          <p className="m-runtime">Runtime: {foundMovie.runtime} minutes</p>
          <p className="m-overview">{foundMovie.overview}</p>
          <div className="m-genre">
            <p>Filed under:</p>
              <ul>{foundMovie.genres.map(genre => <li>{genre}</li>)}</ul>
          </div>
          {(!foundMovie.budget) ? <p className="m-budget">Budget not available</p> :
            <p className="m-budget">Budget: ${foundMovie.budget.toLocaleString()}</p>}
          {(!foundMovie.revenue) ? <p className="m-revenue">Revenue not available</p> :
          <p className="m-revenue">Revenue: ${foundMovie.revenue.toLocaleString()}</p>}
        </div>
        <Link to='/'>
          <button>CLOSE</button>
        </Link>
      </section>
    )
  }
}

Modal.propTypes = {
  foundMovie: PropTypes.object,
  closeModal: PropTypes.func
}

export default Modal;