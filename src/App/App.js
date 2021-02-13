import './App.scss';
import React, { Component } from 'react';
import { Redirect, Switch, Route } from 'react-router-dom';
import Header from '../Header/Header';
import Modal from '../Modal/Modal';
import Error from '../Error/Error';
import CardContainer from '../CardContainer/CardContainer';
import {getAllMovies } from '../util.js';

// display a loading page while component fetch is happening?


class App extends Component {
  constructor() {
    super();
    this.state = {
      movieData: [],
      movieID: NaN,
      modalShowing: false,
      searchTerm: '',
      errorThrown: false
    }
  }

  pageNotFound = () => {
    this.setState({errorThrown: true})
  }

  componentDidMount() {
    getAllMovies()
    .then(movies => {
      if (movies.movies.length) {
        this.setState({movieData: movies.movies})
      } else {
        this.pageNotFound()
        this.setState({movieData: []})
      }
    })
    .catch(error => this.pageNotFound())
  }
  
  getAllMovieData = (movieID) => {
    const foundMovie = this.state.movieData.find(movie => movie.id.toString() === movieID);
    return foundMovie;
  }
  
  closeModal = () => {
    this.setState({modalShowing: false});
  }
  
  searchMovies = () => {
    const moviesFound = this.state.movieData.filter(movie => {
      return movie.title.toLowerCase().includes(this.state.searchTerm.toLowerCase())
    })
    return moviesFound
  }
  
  handleChange = event => {
    this.setState({searchTerm: event.target.value})
    this.searchMovies(event.target.value)
  }
  
  render() {
    if (this.state.errorThrown) {
      // You can render any custom fallback UI
      return <Error />
    } else {
      return (
        <div className="App">
          <Header 
            className="header"
            searchMovies={this.searchMovies}
            handleChange={this.handleChange}
            searchTerm={this.state.searchTerm}
          />
          
          <Switch>
            <Route exact path="/" render={() => 
              <CardContainer
                className="card-container" 
                movieData={!this.searchMovies(this.state.searchTerm).length ? 
                  this.state.movieData : this.searchMovies(this.state.searchTerm)} 
              />
            }/>

            <Route path='/:id' render={({ match }) => {
              const id = match.params.id

              // if nothing comes back from modal, render the error
              return <Modal id={id} closeModal={this.closeModal} pageNotFound={this.pageNotFound} />
                }
              }
            />

            {/* <Route render={() => <Error />} /> */}
          </Switch>
        </div>
      );
    }
  }
}

export default App;
