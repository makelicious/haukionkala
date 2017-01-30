import {
  ADD_CARD,
  DELETE_CARD,
  deleteCardById
} from '../actions/index';

const test = 'how to, click me!';

const initialState = {
  cards: [{
    question: 'Click this to show answer',
    answer: 'Click next-button on the right to reveal next question',
    id: -1,
    category: test,
  },
  {
    question: 'Well done! Click me',
    answer: 'Nice. Click question again to hide me',
    id: -2,
    category: test,
  },
  {
    question: 'Did you know you can create your own questions?',
    answer: 'just go to add questions page and fill em up!',
    id: -3,
    category: test,
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
        category: action.card.category,
      };
    default:
      return state;
  }
};


const cards = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CARD:
      return { cards: state.cards.concat(card(undefined, action)), nextIdToCard: action.card.id + 1 };
    case DELETE_CARD:
      return { ...state, cards: deleteCardById(state.cards, action.id) };
    default:
      return state;
  }
};

export default cards;
