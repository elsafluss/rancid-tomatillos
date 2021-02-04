import React from 'react';

const Card = ({movie, getMovie}) => {
  return (
    <article id={movie.id} onClick={getMovie} >
      <p className="movie-title">
        {movie.title}
      </p>
      <p className="movie-rating">
        {movie.average_rating}
      </p>
      <p className="movie-date">
        {movie.release_date}
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