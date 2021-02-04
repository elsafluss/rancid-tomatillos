import React from 'react';
import './Modal.scss';


function Modal({movieID, getAllMovieData, closeModal}) {

  const foundMovie = getAllMovieData(movieID);

  console.log(foundMovie);
  return (
    (!foundMovie) ? <p>No movie clicked yet</p> : 
    <section className="modal">
      <p>Title</p>
      <p>{foundMovie.title}</p>
      <p>{foundMovie.release_date}</p>
      <p>{foundMovie.average_rating}</p>
      <button onClick={closeModal}>CLOSE</button>
    </section>
  )
}

export default Modal;

// modal container, modal, image