import React, {Component} from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'

export default class MovieShowcase extends Component {

  generateMovieCards = () => {
    return movieData.map((data, id) => <MovieCard {...data} key={id} />)
    }

    // map over your movieData array and return the correct


  render() {
    return (
      <div id="movie-showcase">

      {this.generateMovieCards()}
    </div>
  )
  }


  



  // MovieCard.defaultProps = {
  //   title: 'Unknown',
  //   IMDBRating: null,
  //   genres: ['No Genre(s) Found'],
  //   poster: 'default'
  // }
  // const todoItems = todos.map((todo) =>
  //   <li key={todo.id}>
  //     {todo.text}
  //   </li>
  // );
  //
  // ReactDOM.render(
  //   <NumberList numbers={numbers} />,
  //   document.getElementById('root')
  // );
  //
  // <ul>{listItems}</ul>,
  // document.getElementById('root')
  // );
}
