import qaApp from './reducers/index';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const store = applyMiddleware(thunk)(createStore)(qaApp);

export default store;
