// Set up your application entry point here...
import React from 'react';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';

import Main from './components/Main.js';
import Single from './components/Single.js';
import MovieGrid from './components/MovieGrid.js';

const router = (
  <Router history = {browserHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component = {MovieGrid}></IndexRoute>
      <Route path="/view/:postId" component={Single}></Route>
    </Route>
  </Router>
)

export default router;
