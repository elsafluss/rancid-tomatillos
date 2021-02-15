import React from 'react';
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import './Header.scss';
import Form from '../Form/Form'

const Header = ({searchTerm, handleChange, showSearch}) => {

  return (
    <header className="main-header">
        {showSearch && <Form searchTerm={searchTerm} handleChange={handleChange} />}

      <Link to="/rancid-tomatillos" className="header-link">
        <h1 className="header-title">
          Randy's Totoos
        </h1>
      </Link>
    </header>
  )
}

export default Header;

Header.propTypes = {
  searchMovies: PropTypes.func
}