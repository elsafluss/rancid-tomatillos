import React from 'react';
import './Modal.scss';


function Modal({movieID, getAllMovieData}) {

  const foundMovie = getAllMovieData(movieID);

  console.log(foundMovie);

  
  return (
    <section className="modal">
      <p>Title</p>
    </section>
  )
}

export default Modal;

// modal container, modal, image