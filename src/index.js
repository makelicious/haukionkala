import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Router, Route, browserHistory } from 'react-router';
import App from './App';
import './index.css';
import CardInput from './components/card-input';
import qaApp from './reducers/index';
import currentCardView from './containers/visibleStudy';
import getAllCards from './containers/visibleQA';

let store = applyMiddleware(thunk)(createStore)(qaApp)

console.log(store.getState());

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path='/' component={App}>
        <Router path='/categories' component={getAllCards} />
        <Route path='/add' component={CardInput} />
        <Route path='/study' component={currentCardView} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
)
