
import './App.scss';
import React, { Component } from 'react';
import Header from '../Header/Header';
import Modal from '../Modal/Modal';
import CardContainer from '../CardContainer/CardContainer';
import {getAllMovies, getMovie } from '../util.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      movieData: [],
      movieID: 0,
      foundMovie: null,
      moviesFound: [],
      modalShowing: false
    }
  }

  componentDidMount() {
    getAllMovies()
    .then(movies => {
      this.setState({movieData: movies.movies})
    })
    .catch(error => console.log(error))
  }

  setFoundMovie = (event) => {
    const movieID = event.target.closest("article").id;
    getMovie(movieID)
    .then(movie => {
      this.setState({
        movieID: movie.movie.id,
        modalShowing: true,
        foundMovie: movie.movie
      });
    })
    .catch(error => console.log(error))
  }

  getAllMovieData = (movieID) => {
    const foundMovie = this.state.movieData.find(movie => movie.id.toString() === movieID);
    return foundMovie;
  }

  closeModal = () => {
    this.setState({modalShowing: false});
  }

  searchMovies = (searchTerm) => {
    const moviesFound =  this.state.movieData.filter(movie => {
      return movie.title.toLowerCase().includes(searchTerm.toLowerCase())
    })

    this.setState({moviesFound: moviesFound})
  }
  
  render() {
    return (
      <div className="App">
        <Header 
          className="header"
          searchMovies={this.searchMovies}
        />
        {(this.state.modalShowing) ?
        <Modal 
          foundMovie={this.state.foundMovie}
          closeModal={this.closeModal}
        /> 
        :
        <CardContainer
          className="card-container" movieData={!this.state.moviesFound.length ? this.state.movieData : this.state.moviesFound} getMovie={this.setFoundMovie}
        />}
      </div>
    );
  }
}

export default App;
