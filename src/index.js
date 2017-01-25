import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';

import './index.css';
import App from './app';
import CardInput from './components/card-input';
import Study from './containers/study';
import Categories from './containers/categories';
import store from './store';


render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path='/' component={App}>
        <Router path='/categories' component={Categories} />
        <Route path='/add' component={CardInput} />
        <Route path='/study' component={Study} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
)
