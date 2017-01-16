import {
  ADD_QUESTION
} from '../actions/index';




const question = (state = {}, action) => {
  switch (action.type) {
    case ADD_QUESTION:
      return {
        id: action.id,
        question: action.question,
        answer: action.answer
      }
    default:
      return state
  }
}
const questions = (state = [], action) => {
  switch (action.type) {
    case ADD_QUESTION:
      return [
        ...state,
        question(undefined, action)
      ]
    default:
      return state
  }
}

export default questions
