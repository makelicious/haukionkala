import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { Router, Route, browserHistory } from 'react-router';
import App from './App';
import './index.css';
import QAForm from './components/qa-input';
import qaApp from './reducers/index';
import currentCard from './containers/visibleStudy'
import getAllCards from './containers/visibleQA'

let store = createStore(qaApp)

console.log(store.getState());

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path='/' component={App}>
        <Router path='/categories' component={getAllCards} />
        <Route path='/add' component={QAForm} />
        <Route path='/study' component={currentCard} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
)
