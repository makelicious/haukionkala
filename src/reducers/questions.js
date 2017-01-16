import {
  // NEXT_QUESTION,
  // PREV_QUESTION,
  TOGGLE_ANSWER,
  ADD_QUESTION,
  SHOW_QUESTIONS
} from '../actions/index';




const question = (state = {}, action) => {
  console.log('current state is ', state, 'and action is ', action);

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
      case SHOW_QUESTIONS:
      return {
        state
      }
    default:
      return state
  }
}

export default questions
