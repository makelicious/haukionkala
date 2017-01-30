import {
  ADD_CARD,
} from '../actions/index';

const initialState = {
  cards: [{
      question: 'mitä kuuluu?',
      answer: 'hyvää',
      id: -1,
      category: 'ebin',
    }],
  nextIdToCard: 0,
};



const card = (state = {}, action) => {
  switch (action.type) {
    case ADD_CARD:
      return {
        id: action.card.id,
        question: action.card.question,
        answer: action.card.answer,
        category: action.card.category
      };
    default:
      return state;
  }
}


const cards = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case ADD_CARD:
      return {cards: state.cards.concat(card(undefined, action)), nextIdToCard: action.card.id + 1};
    case 'DELETE_CARD':
      return {...state, cards: deleteCardById(state.cards, action.id)};
    default:
      return state;
  }
}


function deleteCardById(array, id) {
  return array.filter(card => card.id !== id);
}

export default cards;
