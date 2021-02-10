import React from 'react';
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
    <main>
      {movies}
    </main>
  )
}

export default CardContainer;