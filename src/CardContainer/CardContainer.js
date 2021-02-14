import React from 'react';
import PropTypes from 'prop-types'
import './CardContainer.scss'
import Card from '../Card/Card';

const CardContainer = ({movieData}) => {
  const movies = movieData.map(movie => {
    return <Card
      className="card" 
      key={movie.id}
      id={movie.id}
      movie={movie} 
    />
  })

  return (
    !movies.length ? <main className="loading">HEY</main> : 
    <main>
      {movies}
    </main>
  )
}

export default CardContainer;

CardContainer.propTypes = {
  movieData: PropTypes.array,
  getMovie: PropTypes.func
}