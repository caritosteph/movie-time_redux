//Reducer takes 2 things:
//1. the actionTypes.
//2. copy of current state.

// return the store modifided
import initialState from './initialState';
import * as movieUtil from '../utils/MovieUtil.js';

function movies(state = initialState.movies,action){
  switch (action.type) {
    case 'ADD_FAVORITES':
      console.log("Adding as favorite");
      return Object.assign({},state,movieUtil.replaceMovie(state,action));
    case 'LOAD_MOVIES':
        console.log("Adding as favorite");
        return Object.assign({},state);
    default:
      return state

  }
  return state;
}

export default movies;
