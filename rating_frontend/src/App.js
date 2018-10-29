import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {ratingContract} from './setup';
import {ShowMovies} from './ShowMovies';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: [
                {
                    name: "Star wars",
                    rating: 0
                },
                {
                    name: "Gifted",
                    rating: 0
                },
                {
                    name: "Iron first",
                    rating: 0
                },
                {
                    name: "Kay",
                    rating: 0
                }
            ]
        }
        this.handleVoting = this.handleVoting.bind(this);
    }

    handleVoting(movie) {
        ratingContract.voteFor(movie);
        let votes = ratingContract.totalVotesFor(movie).toNumber();
        this.setState({
            movies: this.state.movies.map(mov =>
                mov.name === movie ? Object.assign({}, mov, {rating: votes}): mov
            )
        })
    //     this.setState({movies:this.state.movies.map(
    //         (el)=>el.name===movie? Object.assign({},el,{rating:votes}):el
    //   )});
    }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Ethereum</h1>
          <p className="App-intro">
            Movie Rating Application in Ethereum and React
          </p>
          <div className="movie-table">
            <ShowMovies movies={this.state.movies} vote={this.handleVoting}/>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
