import { combineReducers } from 'redux';
import cards from './questions';
import { currentId, nextIdToCard, showAnswer } from './current';


const qaApp = combineReducers({
  cards,
  currentId,
  nextIdToCard,
  showAnswer
})

export default qaApp;
