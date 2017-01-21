import { combineReducers } from 'redux';
import cards from './questions';
import currentId from './current';


const qaApp = combineReducers({
  cards,
  currentId
})

export default qaApp;
