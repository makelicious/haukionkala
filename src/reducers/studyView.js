import {
  ADD_CARD,
  NEXT_CARD,
  PREV_CARD,
  TOGGLE_CARD,
  DELETE_CARD,
  DELETE_CATEGORY,
  STUDY_CATEGORY_SELECTED,
} from '../actions/index';

const initialState = {
  category: null,
  cards: [],
  id: 0,
  showAnswer: false,
  showCard: false,
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
      if(action.category !== state.category) {
        return {...state, category: action.category, cards: action.cards, showCard: action.showCard, id: action.id, showAnswer: false};
      }
      return initialState;
    case NEXT_CARD:
      return {...state, id: action.id, showAnswer: false};
    case PREV_CARD:
      return Object.assign({}, state, {
        id: action.id,
      });
    case TOGGLE_CARD:
      return {...state, showAnswer: action.showAnswer};
    default:
      return state;
  }
};

export default studyView;
