import qaApp from './reducers/index';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const localSave = localStorage.getItem('app') !== null ? JSON.parse(localStorage.getItem('app')) : {};
const store = createStore(qaApp, localSave, applyMiddleware(thunk));

store.subscribe(() => {
  localStorage.setItem('app', JSON.stringify(store.getState()));
})

export default store;
