import { ADD_CATEGORY } from '../actions/index';


const category = (state = {}, action) => {
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

export const categories = (state = [{id: -1, name: 'ebin'}], action) => {
  switch(action.type) {
    case ADD_CATEGORY:
      return [
        ...state,
        category(undefined, action)
      ];
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
