import {
  ADD_CARD,
} from '../actions/index';




const card = (state = {}, action) => {
  switch (action.type) {
    case ADD_CARD:
      return {
        id: action.id,
        question: action.question,
        answer: action.answer
      }
    default:
      return state
  }
}
const cards = (state = [], action) => {
  switch (action.type) {
    case ADD_CARD:
      return [
        ...state,
        card(undefined, action)
      ]
    default:
      return state
  }
}

export default cards
