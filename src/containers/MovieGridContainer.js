import React, {Component} from 'react';
import Movie from '../components/Movie.js';
import MovieGrid from '../components/MovieGrid.js';

class MovieGridContainer extends Component{
  // constructor(){
  //   super();
  //   this.retrieveMovies = this.retrieveMovies(this);
  // }
  retrieveMovies(){
    let {listMovies} = this.props;
    return  listMovies.map((movie,id) =>  <Movie key={id} movie = {movie}/>);
  }
  render(){
    return <MovieGrid movies = {this.retrieveMovies()}/> ;
  }
}

export default MovieGridContainer;
