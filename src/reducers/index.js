import { combineReducers } from 'redux';
import cards from './questions';
import { currentId, nextIdToCard } from './current';


const qaApp = combineReducers({
  cards,
  currentId,
  nextIdToCard
})

export default qaApp;
