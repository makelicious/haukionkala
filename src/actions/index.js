export const NEXT_CARD = 'NEXT_CARD';
export const ADD_CARD  = 'ADD_CARD';
export const ADD_CATEGORY = 'ADD_CATEGORY';

export const addCard = (card) => {
  return (dispatch, getState) => {
    const { nextIdToCard, categories, nextIdToCategory } = getState();
    dispatch({
      type: ADD_CARD,
      id: nextIdToCard + 1,
      question: card.question,
      answer: card.answer,
      category: card.category
    })

    const duplicates = checkForDuplicates(categories, card.category);

    if(duplicates.length === 0) {
      dispatch({
        type: ADD_CATEGORY,
        id: nextIdToCategory + 1,
        name: card.category
      });
    }
  };
}

export const nextCard = () => {
  return (dispatch, getState) => {
    const {currentId, cards} = getState();
    const nextCardId = currentId === cards.length -1 ? 0 : currentId + 1;
    dispatch({
      type: NEXT_CARD,
      id: nextCardId
    })
  };
}

export const  toggleCard = (bool) => {
  return {
    type: 'TOGGLE_CARD',
    toggle: !bool
  }
}


export const filterByCategory = (category) => {
  return (dispatch, getState) => {
    const { cards, currentlyVisibleCategory } = getState();
    const filteredCards = filterCardsByCategory(cards, category);

    if(category === currentlyVisibleCategory.category) {
      dispatch({
        type: 'SHOW_NONE',
        cards: [],
        category: ''
      })
    }

    else {
    dispatch({
      type: 'FILTER_BY_CATEGORY',
      cards: filteredCards,
      category: category
    })
  }
  }
}

function filterCardsByCategory(cards, filter) {
  return cards.filter(card => card.category === filter)
}


function checkForDuplicates(categories, categoryToAdd) {
  return categories.filter(category => category.name === categoryToAdd);
}
