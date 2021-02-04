import React from 'react';
import './CardContainer.css'
import Card from '../Card/Card';

const CardContainer = ({movieData}) => {
  const movies = movieData.map(movie => {
    return <Card 
      className="card" 
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