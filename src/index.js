import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { Router, Route, hashHistory } from 'react-router';
import App from './App';
import './index.css';
import QAForm from './components/qa-input';
import Study from './components/study';
import qaApp from './reducers/index';
import VisibleQA from './containers/visibleStudy'
import VisibleTodoList from './containers/visibleQA'

let store = createStore(qaApp)

console.log(store.getState());

render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path='/' component={App}>
        <Router path='/categories' component={VisibleTodoList} />
        <Route path='/add' component={QAForm} />
        <Route path='/study' component={VisibleQA} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
)
