import { combineReducers } from 'redux'
import questions from './questions'
import current from './current'
import visibilityFilter from './visibilityFilter'


const qaApp = combineReducers({
  questions,
  current
})

export default qaApp
