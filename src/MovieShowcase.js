import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'

export default class MovieShowcase extends Component {

  generateMovieCards = () => {
    // map over your movieData array and return the correct
    return movieData.map((movie) => {
      return ( 
        <MovieCard title = {movie.title} IMDBRating = {movie.IMDBRating} poster = {movie.poster}genres = {movie.genres}key = "" />
            );
      });
      };


  render() {
    return (
      <div id="movie-showcase">
        {this.generateMovieCards()}
      </div>
    )
  }
}
