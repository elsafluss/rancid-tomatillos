import React from 'react';
import './Modal.scss';


function Modal({foundMovie, closeModal}) {
  console.log(foundMovie)
  return (
    (!foundMovie) ? <p>No movie clicked yet</p> : 
    <section className="modal">
      <img src={foundMovie.backdrop_path} alt="movie backdrop"/>
      <div className="m-data">
        <p className="m-tagline">{foundMovie.tagline}</p>
        <h2 className="m-title">{foundMovie.title}</h2>
        <p className="m-date">Release Date: {foundMovie.release_date}</p>
        <p className="m-rating">Average Rating: {foundMovie.average_rating.toFixed(1)}</p>
        <p className="m-runtime">Runtime: {foundMovie.runtime} minutes</p>
        <p className="m-overview">{foundMovie.overview}</p>
        <div className="m-genre">
          <p>Filed under:</p>
            <ul>
              {foundMovie.genres.map(genre => <li>{genre}</li>)}
            </ul>
        </div>
        <p className="m-budget">Budget: ${foundMovie.budget.toFixed(2)}</p>
        <p className="m-revenue">Revenue: ${foundMovie.revenue.toLocaleString()}</p>
      </div>
      <button onClick={closeModal}>CLOSE</button>
    </section>
  )
}

export default Modal;

// modal container, modal, image