import React from 'react';
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import './Header.scss';
import Form from '../Form/Form'

const Header = ({searchTerm, handleChange}) => {
  return (
<header>
      <Form searchTerm={searchTerm} handleChange={handleChange} />
      <Link to="/">
        <h1>
          Rancid <br></br>
          Tomatillos
        </h1>
      </Link>
    </header>
  )
}

export default Header;

Header.propTypes = {
  searchMovies: PropTypes.func
}