import React from 'react';
import { Link } from 'react-router-dom'
import '../Header/Header.scss'
import './Error.scss'
import Header from '../Header/Header'

const Error = () => {
  return (
      <>
        <Header />
        <section className="error-container">
          <h2 className="borked-title" >This page is borked!</h2>
          <img className="borked-gif" src="https://media.giphy.com/media/10u6gt11vnm812/giphy.gif" alt="bork bork"></img>
          <Link to="/rancid-tomatillos" className="borked-link">
            <h3>If you typed in a URL, please make sure you typed it correctly.</h3>
            <h3>Or click here to return to the home page</h3>
          </Link>
        </section>
      </>
  )
}

export default Error;