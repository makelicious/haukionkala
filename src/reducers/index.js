import { combineReducers } from 'redux'
import cards from './questions'
import current from './current'


const qaApp = combineReducers({
  cards,
  current
})

export default qaApp
