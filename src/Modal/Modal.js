import React from 'react';
import './Modal.scss';


function Modal({foundMovie, closeModal}) {

  return (
    (!foundMovie) ? <p>No movie clicked yet</p> : 
    <section className="modal">
      <img src={foundMovie.backdrop_path} alt="movie backdrop"/>
      <h2>{foundMovie.title}</h2>
      <p>Release Date: {foundMovie.release_date}</p>
      <p>Average Rating: {foundMovie.average_rating}</p>
      <button onClick={closeModal}>CLOSE</button>
    </section>
  )
}

export default Modal;

// modal container, modal, image