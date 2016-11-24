// Set up your root reducer here...
 import { combineReducers } from 'redux';
 import { routerReducer } from 'react-router-redux';

import loadMovies from './loadMoviesReducer.js';


const rootReducer = combineReducers({
  loadMovies,
  routing: routerReducer
});

export default rootReducer;
