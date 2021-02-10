import React from 'react';
import PropTypes from 'prop-types'
import './CardContainer.scss'
import Card from '../Card/Card';

const CardContainer = ({movieData, getMovie}) => {
  const movies = movieData.map(movie => {
    return <Card 
      className="card" 
      key={movie.id}
      id={movie.id}
      movie={movie} 
      getMovie={getMovie}
    />
  })

  return (
    <main>
      {movies}
    </main>
  )
}

export default CardContainer;

CardContainer.propTypes = {
  movieData: PropTypes.object,
  getMovie: PropTypes.func
}