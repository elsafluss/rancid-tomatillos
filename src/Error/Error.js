import React from 'react';
import './Error.scss'
import { Link } from 'react-router-dom';



const Error = () => {
    return (
        <section className="error-container">
            <h2>Borked!</h2>
            <h2>Please check the URL</h2>
        </section>
    )
}

export default Error;