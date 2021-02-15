import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Loading from '../Loading/Loading';
import Error from '../Error/Error';
import { getMovie } from '../util.js';
import { Link } from 'react-router-dom';
import './Modal.scss';

class Modal extends Component {
  constructor({throwError}) {
    super(throwError);
    this.state = {
      foundMovie: null,
      loading: true,
      modalError: false,
      modalSearch: false
    }
  }

  componentDidMount() {
    getMovie(this.props.id)
    .then(movie => {
      return this.setState({foundMovie: movie.movie, loading: false})
    })
    .catch(error => {
      this.props.throwError()
    })
  }

  render() {
    const foundMovie = this.state.foundMovie
    if (this.state.modalError) {
      return <Error />
    } else if (this.state.loading) {
      return <Loading />
    } else {
      return (
        (foundMovie === null) ? <main className="loading">HEY</main> : 
        <section className="modal">
  
          <img src={foundMovie.backdrop_path} alt="movie backdrop"/>
          <h2 className="m-title">{foundMovie.title}</h2>
          <p className="m-tagline">{foundMovie.tagline}</p>
          <div className="m-data">
            <p className="m-overview">{foundMovie.overview}</p>
            <p className="m-date">Release Date: {foundMovie.release_date}</p>
            <p className="m-rating">Average Rating: {foundMovie.average_rating.toFixed(1)}/10.0</p>
            <p className="m-runtime">Runtime: {foundMovie.runtime} minutes</p>
            <div className="m-genre">
              <ul>{foundMovie.genres.map(genre => <li key={genre}>{genre}</li>)}</ul>
            </div>
            {(!foundMovie.budget) ? <p className="m-budget">Budget not available</p> :
              <p className="m-budget">Budget: ${foundMovie.budget.toLocaleString()}</p>}
            {(!foundMovie.revenue) ? <p className="m-revenue">Revenue not available</p> :
            <p className="m-revenue">Revenue: ${foundMovie.revenue.toLocaleString()}</p>}
          <Link to="/rancid-tomatillos">
            <button>BACK TO HOME</button>
          </Link>
          </div>
        </section>
      )
    }
  }
}

Modal.propTypes = {
  foundMovie: PropTypes.object,
  closeModal: PropTypes.func
}

export default Modal;