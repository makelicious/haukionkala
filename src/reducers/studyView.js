import {
  ADD_CARD,
  NEXT_CARD,
  PREV_CARD,
  TOGGLE_CARD,
  DELETE_CARD,
  DELETE_CATEGORY,
  STUDY_CATEGORY_SELECTED,
  SELECT_MODE
} from '../actions/index';

import {
  shuffleCards
} from '../utils/index';

const initialState = {
  category: null,
  cards: [],
  id: 0,
  showAnswer: false,
  showCard: false,
  shuffle: false
};

const studyView = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_CARD:
      return initialState;
    case DELETE_CATEGORY:
      if (state.category === action.deletedCategory) {
        return initialState;
      }
      return state;
    case ADD_CARD:
      if (action.card.category === state.category) {
        const updatedState = {...state, cards:[...state.cards, action.card] };
        return updatedState;
      }
      return state;

    case STUDY_CATEGORY_SELECTED:
        return {...state,
          category: action.category,
          cards: action.shuffle ? shuffleCards(action.cards) : action.cards,
          showCard: action.showCard,
          id: action.id,
          showAnswer: false
        };
    case NEXT_CARD:
    case PREV_CARD:
      return {...state, id: action.id, showAnswer: false};
    case TOGGLE_CARD:
      return { ...state, showAnswer: action.showAnswer };
    case SELECT_MODE:
      return { ...state, shuffle: action.shuffle};
    default:
      return state;
  }
};

export default studyView;
