import React, {Component} from 'react';
import {connect} from 'react-redux';

import MovieGrid from '../components/MovieGrid.js';
import MovieContainer from '../containers/MovieContainer.js';

class MovieGridContainer extends Component{
  retrieveMovies(){
    let {movies} = this.props;
    return  _.map(movies,(movie,id) =>  <MovieContainer key={id} movie = {movie} {...this.props}/>);
  }
  render(){
    return <MovieGrid movies = {this.retrieveMovies()}/> ;
  }
}

function mapStateToProps (state){
  return {
    movies: state.movies
  }
}

export default connect(mapStateToProps,null)(MovieGridContainer);
