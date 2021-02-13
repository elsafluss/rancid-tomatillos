import React from 'react';
import './Loading.scss'
import { Link } from 'react-router-dom';


const Error = () => {
    console.log("Loading!")
    return (
        <section className="loading-container">
            <h2>LOADING!</h2>
        </section>
    )
}

export default Error;