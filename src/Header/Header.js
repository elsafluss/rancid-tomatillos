import React from 'react';
import PropTypes from 'prop-types'
import './Header.scss';
import Form from '../Form/Form'

const Header = ({searchMovies}) => {
  return (
    <header>
      <h1>
        Rancid Tomatillos
      </h1>
      <Form searchMovies={searchMovies} />
    </header>
  )
}

export default Header;

Header.propTypes = {
  searchMovies: PropTypes.func
}