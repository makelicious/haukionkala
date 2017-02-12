import {
  ADD_CARD,
  DELETE_CARD,
  CATEGORIES_CATEGORY_SELECTED,
} from '../actions/index';

import { deleteCardById } from '../utils/index';


const initialState = {
  category: null,
  cards: [],
};

const categoriesView = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_CARD:
      return { ...state, cards: deleteCardById(state.cards, action.id) };
    case ADD_CARD:
      if (action.card.category === state.category) {
        return { ...state, cards: [...state.cards, action.card] };
      }
      return state;
    case CATEGORIES_CATEGORY_SELECTED:
      if (action.category !== state.category) {
        return { cards: action.cards, category: action.category };
      }
      return initialState;
    default:
      return state;
  }
};

export default categoriesView;
