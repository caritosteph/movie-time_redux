// Set up your application entry point here...
import React from 'react';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';

// import Main from './components/Main.js';
import MainContainer from './containers/MainContainer.js';
import SingleMovie from './components/SingleMovie.js';
import MovieGrid from './components/MovieGrid.js';

const router = (
  <Router history = {browserHistory}>
    <Route path="/" component={MainContainer}>
      <IndexRoute component = {MovieGrid}></IndexRoute>
      <Route path="/view/:postId" component={SingleMovie}></Route>
    </Route>
  </Router>
)

export default router;
