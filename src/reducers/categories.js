import {
  ADD_CATEGORY,
  DELETE_CATEGORY
 } from '../actions/index';

const initialState = {
  categories: [{id: -1, name: 'how to, click me!'}],
  nextIdToCategory: 0,
};

export const category = (state = {}, action) => {
  switch(action.type) {
    case ADD_CATEGORY:
      return {
        id: action.id,
        name: action.name
      };
    default:
      return state;
  }
};

export const categories = (state = initialState, action) => {
  switch(action.type) {
    case ADD_CATEGORY:
      return {
        categories: state.categories.concat(category(undefined, action)),
        nextIdToCategory: action.id + 1
      };
    case DELETE_CATEGORY:
      return {...state, categories: action.categories};
    default:
      return state;
  }
};
