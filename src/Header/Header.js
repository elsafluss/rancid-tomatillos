import React from 'react';
import './Header.scss';
import Form from '../Form/Form'

const Header = ({searchMovies}) => {
  return (
    <header>
      <Form searchMovies={searchMovies} />
      <h1>
        Rancid <br></br>
        Tomatillos
      </h1>
    </header>
  )
}

export default Header;