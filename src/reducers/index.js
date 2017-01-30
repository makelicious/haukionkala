import { combineReducers } from 'redux';
import cards from './cards';
import {categories} from './categories';
import studyView from './studyView';
import categoriesView from './categoriesView';

const qaApp = combineReducers({
  cards,
  categories,
  studyView,
  categoriesView,
});

export default qaApp;
