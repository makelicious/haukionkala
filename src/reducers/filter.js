const initialState = {
  cards: []
};


export const currentlyVisibleCategory = (state = initialState, action) => {
  console.log(action);
  switch(action.type) {
    case 'SHOW_NONE':
      return {
        cards: action.cards,
        category: action.category
      }

    case 'FILTER_BY_CATEGORY':
      return {
        cards: action.cards,
        category: action.category
      };
    default:
      return state;
  }
}
