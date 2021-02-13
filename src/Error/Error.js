import React from 'react';
import './Error.scss'
import { Link } from 'react-router-dom';


const Error = () => {
    console.log("Error!")
    return (
        <section className="error-container">
            <h2>Borked!</h2>
          <Link to='/'>
            <button>BACK TO HOME</button>
          </Link>
        </section>
    )
}

export default Error;