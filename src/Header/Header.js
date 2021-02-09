import React from 'react';
import './Header.scss';
import Form from '../Form/Form'

const Header = ({searchTerm, handleChange}) => {
  return (
    <header>
      <Form searchTerm={searchTerm} handleChange={handleChange} />
      <h1>
        Rancid <br></br>
        Tomatillos
      </h1>
    </header>
  )
}

export default Header;