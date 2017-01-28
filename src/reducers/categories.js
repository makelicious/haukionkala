import { ADD_CATEGORY, CATEGORY_SELECTED } from '../actions/index';


export const category = (state = {}, action) => {
  switch(action.type) {
    case ADD_CATEGORY:
      return {
        id: action.id,
        name: action.name
      }
    default:
      return state;
  }
}

export const categories = (state = [{id: 0, name: 'ebin'}], action) => {
  switch(action.type) {
    case ADD_CATEGORY:
      return [
        ...state,
        category(undefined, action)
      ];
    case 'DELETE_CATEGORY':
      return action.categories;
    default:
      return state;
  }
}

export const nextIdToCategory = (state = 0, action) => {
  switch(action.type) {
    case ADD_CATEGORY:
      return action.id;
    default:
      return state;
  }
}

export const categorySelected = (state = {visible: false, cards: [], category: null}, action) => {
  switch(action.type) {
    case CATEGORY_SELECTED:
      return {
        visible: action.visible,
        cards: action.cards,
        category: action.category
      }
    default:
      return state
  }
}
