//Reducer takes 2 things:
//1. the actionTypes.
//2. copy of current state.

// return the store modifided
import initialState from './initialState';
import * as movieUtil from '../utils/MovieUtil.js';

function movies(state = initialState.movies,action){
  switch (action.type) {
    case 'ADD_FAVORITES':
      return Object.assign({},state,movieUtil.replaceMovie(state,action));
    default:
      return state

  }
  return state;
}

export default movies;
