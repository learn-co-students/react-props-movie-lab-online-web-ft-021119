import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'

export default class MovieShowcase extends Component {

  generateMovieCards = () => {
    const movieCards = movieData.map((data) => (

    <MovieCard 
    title ={data.title}
    IMDBRating={data.IMDBRating}
    genres={data.genres}
    poster={data.poster}/>
    
         )
      )
    return movieCards;


    // map over your movieData array and return the correct 
  }

  render() {
    return (
      <div id="movie-showcase">
        {this.generateMovieCards()}
      </div>
    )
  }
}
