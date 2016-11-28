import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as actions from '../actions/actionCreator.js';
import Main from '../components/Main.js';

import React, {Component} from 'react';

function mapStateToProps (state){
  return {
    listMovies: state.movies
  }
}

function mapDispachToProps (dispatch){
  return {
    actions: bindActionCreators(actions,dispatch)
  }
}

const MoviesContainer = connect(mapStateToProps,mapDispachToProps)(Main);

export default MoviesContainer;
