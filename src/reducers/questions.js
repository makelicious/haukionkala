import {
  ADD_CARD,
} from '../actions/index';

const initialState = [
  {
    question: 'mitä kuuluu?',
    answer: 'hyvää',
    id: 0,
    category: 'ebin',
  }
];



const card = (state = {}, action) => {
  switch (action.type) {
    case ADD_CARD:
      return {
        id: action.id,
        question: action.question,
        answer: action.answer,
        category: action.category
      };
    default:
      return state;
  }
}


const cards = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CARD:
      return [
        ...state,
        card(undefined, action)
      ];
    case 'DELETE_CARD':
      return action.cards;
    default:
      return state;
  }
}

export default cards;
