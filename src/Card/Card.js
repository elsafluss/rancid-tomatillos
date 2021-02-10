import React from 'react';
import PropTypes from 'prop-types'
import './Card.scss';

const Card = ({movie, getMovie}) => {
  return (
    <article className="card" id={movie.id} onClick={getMovie} >
      <img className="thumbnail" src={movie.poster_path} alt="thumbnail"/>
      <p className="movie-title">
        {movie.title}
      </p>
      <p className="movie-rating">
        Rating: {movie.average_rating.toFixed(1)}
      </p>
      <p className="movie-date">
        Released: {movie.release_date}
      </p>
      {/* <p className="movie-rating">
        Avg Rating
      </p>
      <p className="movie-genre">
        Genres
      </p> */}
    </article>
  )
}

export default Card;

Card.propTypes = {
  movie: PropTypes.object,
  getMovie: PropTypes.func
}