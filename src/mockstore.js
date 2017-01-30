import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import qaApp from './reducers/index';

const mockstore = createStore(qaApp, applyMiddleware(thunk));


export default mockstore;
