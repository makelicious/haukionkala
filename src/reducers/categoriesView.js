const initialState = {
  category: null,
  cards: [],
};



function deleteCardById(array, id) {
  return array.filter(card => card.id !== id);
}

const categoriesView = (state = initialState, action) => {
  switch (action.type) {
    case 'DELETE_CARD':
    return {...state, cards: deleteCardById(state.cards, action.id)}
    case 'ADD_CARD':
      if(action.card.category === state.category) {
        return {...state, cards:[...state.cards, action.card]}
      }
      return state;
    case 'CATEGORIES_CATEGORY_SELECTED':
      if(action.category !== state.category) {
        return { cards: action.cards, category: action.category };
      }
      return {...initialState};
    default:
      return state;
  }
};

export default categoriesView;
