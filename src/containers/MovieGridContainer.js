import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {listMovies} from '../actions/actionCreator.js';

import MovieGrid from '../components/MovieGrid.js';
import MovieContainer from '../containers/MovieContainer.js';

class MovieGridContainer extends Component{
  retrieveMovies(){
    let {listMovies} = this.props;
    return  listMovies.map((movie,id) =>  <MovieContainer key={id} movie = {movie}/>);
  }
  render(){
    return <MovieGrid movies = {this.retrieveMovies()}/> ;
  }
}

function mapStateToProps (state){
  return {
    listMovies: state.movies
  }
}
//
function mapDispachToProps (dispatch){
  return {
    listMovies: (movies) => dispatch(movies)
  }
}

export default connect(mapStateToProps,null)(MovieGridContainer);
