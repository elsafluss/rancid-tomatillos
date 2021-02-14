import React from 'react';
import './Loading.scss'


const Loading = () => {
    return (
        <section className="loading-container">
            <h2>Please be patient, we're changing the reel!</h2>
            <img className="borked-gif" src="https://media.giphy.com/media/ppyvw6iUQjdja/giphy.gif" alt="bork bork"></img>
        </section>
    )
}

export default Loading;