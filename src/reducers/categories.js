import { ADD_CATEGORY } from '../actions/index';


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
  console.log(state);
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
