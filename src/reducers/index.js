// Set up your root reducer here...
import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';

import movies from './moviesReducer.js';

const rootReducer  = combineReducers ({
  movies,
  routing: routerReducer
});

export default rootReducer;
