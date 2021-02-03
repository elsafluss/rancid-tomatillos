
import './App.css';
import React, { Component } from 'react';
import Header from '../Header/Header';
// import RabbitTrail from '../RabbitTrail/RabbitTrail'
import CardContainer from '../CardContainer/CardContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header className="header" />
        <p>Hello</p>
        {/* <RabbitTrail className="rabbit-trail" /> */}
        <CardContainer className="card-container" />
      </div>
    );
  }
}

export default App;
