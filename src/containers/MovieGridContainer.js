import React, {Component} from 'react';
// import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
// import {loadMovies} from '../actions/actionCreators.js';

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
// function mapDispachToProps(dispatch) {
//   return bindActionCreators(actionCreators, dispatch);
// }
//
// function mapDispatchToProps (dispatch){
//   return {
//     loadMovies: (movies) => dispatch(movies)
//   }
// }

export default connect(mapStateToProps,null)(MovieGridContainer);
