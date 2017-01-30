import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';

import './index.css';
import App from './app';
import CardInput from './components/card-input';
import Study from './containers/study';
import Categories from './containers/categories';
import frontPage from './components/frontpage';
import store from './store';


render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path='/' component={App}>
        <Router path='/main' component={frontPage} />
        <Router path='/categories' component={Categories} />
        <Router path='/add' component={CardInput} />
        <Router path='/study' component={Study} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
)
