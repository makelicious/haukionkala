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
    const prevCardId = currentId === 0 ? categorySelected.cards.length -1 : currentId -1;
    dispatch({
      type: 'PREV_CARD',
      id: prevCardId
    })
  }
}

export const  toggleCard = (bool) => {
  return {
    type: 'TOGGLE_CARD',
    toggle: !bool
  };
}


export const deleteCard = (card) => {
  return (dispatch, getState) => {
    const { cards, categories, currentlyVisibleCategory } = getState();
    const newCards = deleteCardById(cards, card.id);

    dispatch({
      type: 'DELETE_CARD',
      cards: newCards
    })

    const filteredCards = filterCardsByCategory(newCards, card.category);


      //After deleting cards, if there is no cards left, delete category
      if (filteredCards.length === 0) {
        const newCategories = categories.filter((category) => (
          category.name !== card.category
        ));
        dispatch({
          type: 'DELETE_CATEGORY',
          categories: newCategories
        });

        //if deleted category was the one we view, set to none
      if(card.category === currentlyVisibleCategory.category) {
        dispatch({
          type: 'SHOW_NONE',
          cards: [],
          category: ''
        })
      }
      }
  }
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

function filterCardsByCategory(cards, category) {
  return cards.filter(card => card.category === category)
}


function checkForDuplicates(categories, categoryToAdd) {
  return categories.filter(category => category.name === categoryToAdd);
}

function deleteCardById(array, id) {
  return array.filter(card => card.id !== id);
}
