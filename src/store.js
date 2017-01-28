import qaApp from './reducers/index';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
const localSave = localStorage.getItem('haukionkala') !== null ? JSON.parse(localStorage.getItem('haukionkala')) : {};
const store = createStore(qaApp, localSave, applyMiddleware(thunk));

store.subscribe(() => {
  localStorage.setItem('haukionkala', JSON.stringify(store.getState()));
})

export default store;
