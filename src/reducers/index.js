import { combineReducers } from 'redux'
import questions from './questions'
import current from './current'


const qaApp = combineReducers({
  questions,
  current
})

export default qaApp
