
import './App.scss';
import React, { Component } from 'react';
import Header from '../Header/Header';
// import RabbitTrail from '../RabbitTrail/RabbitTrail'
import CardContainer from '../CardContainer/CardContainer';
import movieData from '../movieData';

class App extends Component {
  constructor() {
    super();
    this.state = {
      movieData: movieData.movies
    }
  }
  
  render() {
    return (
      <div className="App">
        <Header className="header" />
        {/* <RabbitTrail className="rabbit-trail" /> */}
        <CardContainer className="card-container" movieData={this.state.movieData}/>
      </div>
    );
  }
}

export default App;
