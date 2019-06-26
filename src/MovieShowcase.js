import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'

export default class MovieShowcase extends Component {
  render(){
    const movieCards = movieData.map((movie, idx) =>(
      <MovieCard
        key={idx}
        {...movie}
        /> ))
    return (
      <div id="movie-showcase">
        {movieCards}
      </div>
    )
  }
}
