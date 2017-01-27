export const NEXT_CARD = 'NEXT_CARD';
export const ADD_CARD  = 'ADD_CARD';
export const ADD_CATEGORY = 'ADD_CATEGORY';
export const CATEGORY_SELECTED = 'CATEGORY_SELECTED';
export const SELECT_CATEGORY = 'SELECT_CATEGORY';
export const SWITCH_CATEGORY = 'SWITCH_CATEGORY';

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
    const {currentId, categorySelected} = getState();
    const nextCardId = currentId === categorySelected.cards.length -1 ? 0 : currentId + 1;
    dispatch({
      type: NEXT_CARD,
      id: nextCardId
    })
  };
}


export const prevCard = () => {
  return (dispatch, getState) => {
    const { currentId, categorySelected } = getState();
    const nextCardId = currentId === 0 ? categorySelected.cards.length -1 : currentId -1;
    dispatch({
      type: 'PREV_CARD',
      id: nextCardId
    })
  }
}

export const  toggleCard = (bool) => {
  return {
    type: 'TOGGLE_CARD',
    toggle: !bool
  };
}

export const selectCategory = () => {
  return (dispatch, getState) => {
    const { categorySelected } = getState();
    if(categorySelected) {
      dispatch({
        type: '',
        cards: '',
        category: ''
      })
    }
  }

}

export const categorySelected = (bool, name) => {
  let lastCategoryPicked;
  return (dispatch, getState) => {
    console.log(getState());
    const { cards, categorySelected } = getState();
    const filteredCards = filterCardsByCategory(cards, name);

    if(categorySelected.category !== name) {
      dispatch({
        type: SWITCH_CATEGORY,
        id: 0
      });

      //if cards are already visible, we want still see the cards
      //by turning our visible cards toggle around once correct dispatch is sent
      if(bool) {
        bool = !bool;
      }
    }
    dispatch({
      type: CATEGORY_SELECTED,
      visible: !bool,
      cards: filteredCards,
      category: name
    });
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
