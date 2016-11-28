// Set up your application entry point here...
import React from 'react';
import {render} from 'react-dom';
import {Router, browserHistory} from 'react-router';
import './sass/main.scss';
require('./favicon.ico');
import router from './routes.js';
import configureStore from './store/configureStore';
import {syncHistoryWithStore} from 'react-router-redux'
import {Provider} from 'react-redux';

const app  = document.getElementById('app');

const store  = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

render(
  <Provider store={store}>
      <Router history= {history} routes = {router}/>
  </Provider>
  ,app);
