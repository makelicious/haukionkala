import { combineReducers } from 'redux';
import cards from './questions';
import { currentlyVisibleCategory } from './filter';
import { currentId, nextIdToCard, showAnswer } from './current';
import { categories, nextIdToCategory } from './categories';

const qaApp = combineReducers({
  cards,
  currentId,
  nextIdToCard,
  showAnswer,
  categories,
  nextIdToCategory,
  currentlyVisibleCategory
})

export default qaApp;
