import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';

import './index.css';
import App from './app';
import CardInput from './components/card-input';
import Study from './containers/study';
import Categories from './containers/categories';
import frontPage from './components/frontpage';
import game from './components/game';
import store from './store';


render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path='/' component={App}>
        <IndexRoute component={frontPage} />
        <Route path='/categories' component={Categories} />
        <Route path='/add' component={CardInput} />
        <Route path='/study' component={Study} />
        <Route path='/memorygame' component={game} />>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
)
