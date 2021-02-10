import React from 'react';
import { Link } from 'react-router-dom'
import './Card.scss';

const Card = ({movie}) => {
  return (
    <Link to={`/${movie.id}`}>
      <article className="card" id={movie.id} >
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
      </article>
    </Link>

  )
}

export default Card;